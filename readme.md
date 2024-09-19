# QuizMaster - Interactive Quiz Application

This repository contains the code for QuizMaster, an interactive quiz application designed to test users on various topics with enhanced features for user engagement. The project uses advanced JavaScript, DOM manipulation, and includes a leaderboard, category selection, and timer-based challenges.

## Project Overview

QuizMaster offers an interactive quiz experience where users can select categories, difficulty levels, and receive immediate feedback on their answers. The application tracks scores, provides detailed results, and includes a leaderboard to save top scores.

## Features

- User registration with name input
- Category and difficulty level selection
- Multiple-choice questions with instant feedback
- Timer for each question, adding urgency
- Progress bar to indicate quiz completion
- Skip questions with optional point deduction
- Score tracking and detailed performance breakdown
- Leaderboard with localStorage for persistent top scores
- Review and retry section for each quiz

## Pages

- **Home Page:** Welcome message, category, difficulty and userName selection, start quiz button.
- **Quiz Page:** Displays one question at a time, with a timer and progress bar. Instant feedback for correct/incorrect answers.
- **Results Page:** Final score breakdown, correct/incorrect answers summary, option to restart or view the leaderboard.
- **Leaderboard Page:** Top scores list with the ability to save scores.

## Installation

1. Clone the repository: `git clone https://github.com/tomikorzu/quizmaster-app.git`
chaati
2. Open the folder in `Visual Studio Code` (or any code editor)

## Usage

1. **Using Live Server:**

   - Install the "Live Server" extension in VS Code.
   - Open the `index.html` file and click "Go Live" to launch the application.

2. **Without Live Server:**
   - Navigate to the project folder and open `index.html` directly in a web browser.

## Technical Requirements

- Uses semantic HTML5, CSS transitions, and animations.
- Fully responsive design for desktop and mobile devices.
- JavaScript handles quiz logic, question selection, timing, and scoring.
- Event listeners for user interactions like answering questions and submitting scores.
- Leaderboard data stored using `localStorage` for persistence between sessions.
