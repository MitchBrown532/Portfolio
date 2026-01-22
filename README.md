# Developer Portfolio Website

Concise full-stack portfolio built with React (frontend) and Flask (backend). It showcases projects, skills, music, and contact information. This repository includes unit tests for both frontend and backend.

---

## Table of Contents

1. [Project](#project)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Setup & Installation](#setup--installation)
6. [Environment Variables](#environment-variables)
7. [Run Locally](#run-locally)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License](#license)
12. [Contact](#contact)

---

## Project

This repository contains a developer portfolio: a React frontend that consumes a Flask API backend. The Projects page pulls repository data from GitHub. The app is intended as a professional portfolio for job applications.

---

## Key Features

- Dynamic Projects page (GitHub integration)
- Skills, About, and Contact sections
- Music embedding (SoundCloud/Spotify)
- CORS-enabled backend API with caching
- Unit tests: Jest (frontend), Pytest (backend)

---

## Tech Stack

- Frontend: React, JavaScript, CSS
- Backend: Python, Flask, Flask-CORS, Flask-Caching
- API: GitHub REST API
- Testing: Jest, Pytest

---

## Project Structure

- `backend/` — Flask API, `requirements.txt`, and tests
- `frontend/` — React app and npm tooling
- `README.md` — This file (overview and quickstart)

For detailed setup see:
- Backend: `backend/README.md`
- Frontend: `frontend/README.md`

---

## Setup & Installation

Prerequisites:

- Node.js and npm (for frontend)
- Python 3.8+ and pip (for backend)

Quick start (development):

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Backend install:

```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate
pip install -r requirements.txt
```

Frontend install:

```bash
cd frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside `backend/` with at minimum:

```env
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your_github_token_optional
SECRET_KEY=your-secret-key
FLASK_DEBUG=True
```

---

## Run Locally

Start the backend (in `backend/`):

```bash
python app.py
```

Start the frontend (in `frontend/`):

```bash
npm start
```

The frontend expects the API at `http://localhost:5000/api/...` by default. Adjust proxy or CORS settings if needed.

---

## Testing

- Frontend: `cd frontend && npm test`
- Backend: `cd backend && pytest`

All tests should pass before submitting this project in applications.

---

## Deployment

Recommended hosts:

- Frontend: Vercel, Netlify
- Backend: Render, Heroku

CI/CD: Add a pipeline to run tests and lint before deploy.

---

## Contributing

Small, focused PRs welcome. Include tests for new functionality and update documentation where applicable.

---

## License

MIT

---

## Contact

Include links to your GitHub, LinkedIn, or email here.
