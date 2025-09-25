# Developer Portfolio Website

Welcome to my Developer Portfolio Website! This project showcases my personal and professional work, musical creations, and skills. Built with Flask on the backend and React on the frontend, this website serves as a centralized place for my projects, background, and contact information.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Environment Variables](#environment-variables)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Future Improvements](#future-improvements)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Overview

This portfolio website is a place to showcase my work, skills, and background in a clean, professional format. It includes several key pages such as **Home**, **About**, **Projects**, **Skills**, and **Music**. The Projects page dynamically fetches data from my GitHub profile, while the Music page showcases my musical works from platforms like SoundCloud and Spotify.

---

## Features

- **Home Page**: A landing page with an introduction and links to other sections.
- **About Page**: A section detailing my background, experience, and skills.
- **Projects Page**: Dynamic display of GitHub repositories with project details (name, description, language, etc.).
- **Skills Page**: A comprehensive list of technical skills, categorized by type.
- **Music Page**: An embedded music player to showcase my musical creations.
- **Contact Section**: A contact form or links to reach out on LinkedIn, GitHub, and email.

---

## Technologies Used

- **Frontend**: React, JavaScript, and CSS (with plans to use a global CSS or TailwindCSS for consistent styling).
- **Backend**: Flask with Flask-CORS and Flask-Caching for optimized API handling and performance.
- **API**: GitHub API for fetching project data.
- **Hosting**: Deployment planned on platforms like Netlify (for frontend) and Heroku or Render (for backend).

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) and npm (for frontend)
- [Python 3.x](https://www.python.org/) and pip (for backend)
- A GitHub Personal Access Token (optional) for authenticated API calls

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### Backend Setup (Flask)

1. Navigate to backend folder:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate the virtual environment:

```bash
# For Windows
venv\Scripts\activate

# For Mac/Linux
source venv/bin/activate
```

4. Install dependencies:

```bash
pip install -r requirements.txt
```

### Frontend Setup (React)

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

### Launching the Project (Frontend + Backend)

After completing the backend and frontend setup, you can launch the entire project with a single command:

```bash
cd frontend
npm run dev
```

This will:

- Start the React frontend on localhost:3000
- Start the Flask backend on localhost:5000

### Environment Variables

- Create a .env file in backend folder and add the following:

```bash
# GitHub Configuration
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-token   # Optional, use None if not using a token

# Flask Configuration
SECRET_KEY=your-secret-key
FLASK_DEBUG=True
```

## Usage

- **View the Home Page:** Get an overview of the portfolio and links to other sections.
- **Explore Projects:** Visit the Projects page to see a list of GitHub repositories.
- **Listen to Music:** Head over to the Music page to listen to musical creations embedded from SoundCloud or Spotify.
- **Contact:** Reach out through LinkedIn, GitHub, or email links provided in the footer.

## Project Structure

backend/
├── app.py # Main Flask application file
├── config.py # Configurations for the app
├── routes/ # Blueprint routes
│ ├── github.py # GitHub API handling
├── requirements.txt # Backend dependencies
├── .env # Environment variables file (gitignored)
frontend/
├── public/
├── src/
│ ├── components/ # Reusable React components
│ ├── pages/ # Pages: Home, Projects, About, Skills, Music
│ ├── App.js # Main React app
│ ├── index.js # Entry point for React
.gitignore # Ignore node_modules, venv, .env, etc.
README.md

## Future Improvements

- **Add Search and Filtering:** Enable search or filter by project name, language, or tags.
- **Implement Dark Mode:** Provide a toggle for light and dark theme support.
- **Add More Detailed About Page:** Include an interactive timeline or resume section.
- **Optimize Mobile Experience:** Ensure full compatibility with mobile devices

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

Please ensure your code follows the project's style guide and includes relevant documentation.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Contact

Feel free to reach out via LinkedIn or GitHub.
