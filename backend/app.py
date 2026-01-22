from flask import Flask, request, jsonify
import smtplib
import ssl
from email.message import EmailMessage
from flask_cors import CORS
from dotenv import load_dotenv
from .config import Config
from .routes.github import github_bp
from .extensions import cache  

load_dotenv()

# Create the Flask app
app = Flask(__name__)

# Apply configuration from config.py
app.config.from_object(Config)

# Enable CORS for cross-origin requests
CORS(app)

# Initialize Cache
cache.init_app(app)  # Bind cache to the app instance

# Register Blueprints
app.register_blueprint(github_bp, url_prefix='/api/github')

@app.route('/')
def home():
    return "Hello from the backend!"


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    app.logger.info(f"Contact form received from {name} <{email}>: {message}")

    smtp_host = app.config.get('SMTP_HOST')
    smtp_port = app.config.get('SMTP_PORT')
    smtp_user = app.config.get('SMTP_USER')
    smtp_pass = app.config.get('SMTP_PASS')
    smtp_tls = app.config.get('SMTP_USE_TLS', True)
    email_to = app.config.get('EMAIL_TO')
    email_from = app.config.get('EMAIL_FROM') or smtp_user

    # If SMTP is not configured, return received with info (frontend will fallback to mailto)
    if not smtp_host or not smtp_user or not smtp_pass or not email_to:
        app.logger.warning("SMTP not fully configured; skipping send")
        return jsonify({"status": "received", "sent": False}), 200

    # Build the email
    msg = EmailMessage()
    subject = f"Portfolio Contact: {name or email}"
    msg['Subject'] = subject
    msg['From'] = email_from
    msg['To'] = email_to
    body = f"Message from portfolio contact form:\n\nName: {name}\nEmail: {email}\n\nMessage:\n{message}"
    msg.set_content(body)

    try:
        context = ssl.create_default_context()
        if smtp_tls and smtp_port in (465, '465'):
            # Use SMTP_SSL for port 465
            with smtplib.SMTP_SSL(smtp_host, smtp_port, context=context) as server:
                server.login(smtp_user, smtp_pass)
                server.send_message(msg)
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=20) as server:
                server.ehlo()
                if smtp_tls:
                    server.starttls(context=context)
                    server.ehlo()
                server.login(smtp_user, smtp_pass)
                server.send_message(msg)

        app.logger.info(f"Contact email sent to {email_to}")
        return jsonify({"status": "sent", "sent": True}), 200
    except Exception as e:
        app.logger.exception("Failed to send contact email")
        return jsonify({"status": "error", "error": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])

