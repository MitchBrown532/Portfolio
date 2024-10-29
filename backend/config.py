import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

class Config:
    # General Config
    SECRET_KEY = os.getenv('SECRET_KEY', 'supersecretkey')  # Change 'supersecretkey' for production
    DEBUG = os.getenv('FLASK_DEBUG', True)  # Set to False for production

    # GitHub API Config
    GITHUB_USERNAME = os.getenv('GITHUB_USERNAME')
    GITHUB_TOKEN = os.getenv('GITHUB_TOKEN', None)  # Optional token

    # Flask-Caching Config
    CACHE_TYPE = 'SimpleCache'  # Use simple in-memory cache for now
    CACHE_DEFAULT_TIMEOUT = 600  # Cache timeout in seconds (10 minutes)

    