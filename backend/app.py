from flask import Flask
from flask_cors import CORS
from flask_caching import Cache  # Import the Cache class
from dotenv import load_dotenv
from config import Config
from routes.github import github_bp

# Load environment variables from the .env file
load_dotenv()

# Create the Flask app
app = Flask(__name__)

# Apply configuration from config.py
app.config.from_object(Config)

# Enable CORS for cross-origin requests
CORS(app)

# Initialize Cache
cache = Cache(app)  # Correctly initialize the cache with the app

# Register Blueprints
app.register_blueprint(github_bp, url_prefix='/api/github')

@app.route('/')
def home():
    return "Hello from the backend!"

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])
