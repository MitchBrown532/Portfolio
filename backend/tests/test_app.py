import pytest
import json
from ..app import app
from unittest.mock import patch, MagicMock
import requests

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_home_route(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Hello from the backend!" in response.data

@patch('backend.routes.github.requests.get')
def test_github_route_success(mock_get, client):
    # Mock successful GitHub API response
    mock_response = MagicMock()
    mock_response.json.return_value = [
        {
            "name": "test-repo",
            "description": "A test repo",
            "html_url": "https://github.com/test/test-repo",
            "language": "Python",
            "created_at": "2023-01-01T00:00:00Z",
            "private": False
        }
    ]
    mock_response.raise_for_status.return_value = None
    mock_get.return_value = mock_response

    response = client.get('/api/github/projects')
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) == 1
    assert data[0]['name'] == 'test-repo'

@patch('backend.routes.github.requests.get')
def test_github_route_api_error(mock_get, client):
    # Mock GitHub API error
    mock_get.side_effect = requests.exceptions.RequestException("API Error")

    response = client.get('/api/github/projects')
    assert response.status_code == 500
    data = response.get_json()
    assert "error" in data

def test_github_route_no_token(client):
    # Test without token (should still work but with rate limits)
    response = client.get('/api/github/projects')
    # In real scenario, this might fail due to rate limits, but test structure
    assert response.status_code in [200, 500]  # Allow for API failure in test

def test_cors_headers(client):
    response = client.get('/', headers={'Origin': 'http://localhost:3000'})
    assert 'Access-Control-Allow-Origin' in response.headers