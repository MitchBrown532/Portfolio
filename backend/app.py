from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from .config import Config
from .routes.github import github_bp
from .extensions import cache  # Import cache from extensions.py

# Load environment variables from the .env file
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

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])

