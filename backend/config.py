import os
from dotenv import load_dotenv

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

    # SMTP / Email Config
    SMTP_HOST = os.getenv('SMTP_HOST')
    SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
    SMTP_USER = os.getenv('SMTP_USER')
    SMTP_PASS = os.getenv('SMTP_PASS')
    SMTP_USE_TLS = os.getenv('SMTP_USE_TLS', 'true').lower() in ('1', 'true', 'yes')

    # Where incoming messages should be delivered (your email)
    EMAIL_TO = os.getenv('EMAIL_TO', os.getenv('SMTP_USER'))
    # Optional From override; defaults to SMTP_USER if not set
    EMAIL_FROM = os.getenv('EMAIL_FROM', os.getenv('SMTP_USER'))

