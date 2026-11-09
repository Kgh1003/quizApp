# Quiz App

A React and Vite quiz app with multiple-choice questions about JSON. Each question has a 30-second timer, and the app tracks your score and shows the correct answer when time runs out or you choose an incorrect answer.

## Getting started

Install the dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── Components/
│   └── Quiz/       # Quiz interface and styles
├── assets/
│   └── data.js     # Quiz questions and answer keys
├── App.jsx
└── main.jsx
```

To change the quiz content, edit the `questions` array in `src/assets/data.js`. Each question has a `question`, four option fields (`option1` through `option4`), and an `ans` field containing the correct option number from 1 to 4.

## Project URL
https://roadmap.sh/projects/quiz-app