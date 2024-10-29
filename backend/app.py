from flask import Flask, jsonify
from flask_cors import CORS
import requests


app = Flask(__name__)
CORS(app)  # Allows all domains to make requests to the Flask API

@app.route('/')
def home():
    return "Hello from the backend!"

@app.route('/api/projects')
def get_projects():
    projects = [
        {"id": 1, "name": "Portfolio Website", "description": "A personal portfolio website"},
        {"id": 2, "name": "Weather App", "description": "A weather forecasting app"},
    ]
    return jsonify(projects)

# Replace 'your-username' with your actual GitHub username
GITHUB_USERNAME = 'MitchBrown532'
# Add your personal access token here (optional)
GITHUB_TOKEN = None  # You can also use None for no token

@app.route('/api/github-projects')
def github_projects():
    url = f'https://api.github.com/users/{GITHUB_USERNAME}/repos'
    headers = {'Authorization': f'token {GITHUB_TOKEN}'} if GITHUB_TOKEN else {}

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise error if the request failed
        repos = response.json()

        # Optionally, filter out private or non-relevant repos
        filtered_repos = [
            {
                "name": repo['name'],
                "description": repo['description'],
                "html_url": repo['html_url'],
                "language": repo['language'],
                "created_at": repo['created_at'],
            }
            for repo in repos if not repo['private']  # Only public repos
        ]
        return jsonify(filtered_repos)

    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
