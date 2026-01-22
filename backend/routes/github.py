from flask import Blueprint, jsonify
import requests
from ..extensions import cache
from ..config import Config

# Create a Blueprint for GitHub-related routes
github_bp = Blueprint('github', __name__)


# GitHub Projects API route with caching
@github_bp.route('/projects', methods=['GET'])
@cache.cached()  # duration defined in config.py

def github_projects():
    url = f'https://api.github.com/users/{Config.GITHUB_USERNAME}/repos'
    headers = {'Authorization': f'token {Config.GITHUB_TOKEN}'} if Config.GITHUB_TOKEN else {}

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        repos = response.json()

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
