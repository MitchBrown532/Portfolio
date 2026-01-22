# Backend (Flask API)

This directory contains the Flask backend for the Developer Portfolio Website. It provides API endpoints for project data, handles CORS, and implements caching for performance.

## Features
- Serves API endpoints for frontend consumption
- Fetches and filters GitHub repositories
- CORS enabled for frontend-backend communication
- Caching for improved performance
- Environment variable support via `.env`
- Fully tested with pytest

## Technologies
- Python 3.14+
- Flask
- Flask-CORS
- Flask-Caching
- Requests
- Python-dotenv
- Pytest

## Setup & Installation
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file with the following variables:
   ```env
   SECRET_KEY=your_secret_key
   FLASK_DEBUG=True
   GITHUB_USERNAME=your_github_username
   GITHUB_TOKEN=your_github_token # optional
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```

## Testing
Run all backend tests with:
```bash
pytest tests/
```

## Project Structure
- `app.py` — Main Flask app
- `config.py` — Configuration settings
- `extensions.py` — Flask extensions (cache)
- `routes/` — API route blueprints
- `tests/` — Pytest test suite

## Deployment
Render

## License
MIT
