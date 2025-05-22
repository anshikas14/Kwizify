# Kwizify - Interactive AI-Powered Quiz Game

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Core Features](#core-features)
6. [State Management](#state-management)
7. [Question Generation](#question-generation)
8. [Wildcards System](#wildcards-system)
9. [UI Components](#ui-components)
10. [Deployment](#deployment)
11. [Environment Variables](#environment-variables)
12. [Future Improvements](#future-improvements)

## Project Overview

Kwizify is an interactive quiz/trivia application that leverages AI to generate unique questions. The application offers multiple game modes, various topic categories, and special wildcards to enhance the gameplay experience. Players can test their knowledge across diverse subjects while enjoying a responsive and engaging user interface.

### Key Features

- **Multiple Game Modes**: Different ways to play and experience the quiz
- **Diverse Topic Categories**: Wide range of subjects to choose from
- **AI-Generated Questions**: Fresh and unique questions created via Cohere AI
- **Helpful Wildcards**: Special aids when stuck on difficult questions
- **Responsive Design**: Seamless experience across all devices
- **Interactive UI**: Engaging visual feedback and animations

## Architecture

Kwizify follows a modern web application architecture:

- **Frontend**: Next.js with React for component-based UI
- **State Management**: Zustand for efficient, centralized state management
- **API Integration**: Server-side API routes for AI question generation
- **Styling**: Tailwind CSS for responsive, utility-first styling

The application uses the page router approach in Next.js, with API routes handling server-side operations like AI question generation.

## Technology Stack

### Frontend

- **Next.js 13.1.5**: React framework for production
- **React 18.2.0**: UI library
- **Tailwind CSS 3.2.4**: Utility-first CSS framework
- **React Icons 4.7.1**: Icon library
- **React Canvas Confetti 1.3.0**: Visual effects for celebrations

### State Management

- **Zustand 4.3.8**: Lightweight state management solution

### AI Integration

- **Cohere AI 5.0.2**: AI platform for generating quiz questions

### Development Tools

- **ESLint**: Code quality and style checking
- **PostCSS**: CSS transformation tool
- **Autoprefixer**: CSS vendor prefixing

## Project Structure

```
Kwizify/
├── public/          # Static assets
├── src/
│   ├── assets/      # Project assets (images, static data)
│   │   ├── Form/    # Form-related components
│   │   ├── Home/    # Homepage components
│   │   ├── Play/    # Game play components
│   │   └── Questions/ # Question-related components
│   ├── helpers/     # Utility functions
│   ├── pages/       # Next.js pages
│   │   ├── api/     # API routes
│   │   │   └── questions.js # AI question generation endpoint
│   │   ├── play/    # Game play routes
│   │   ├── _app.js  # Custom App component
│   │   ├── _document.js # Custom Document component
│   │   └── index.js # Homepage
│   ├── store/       # Zustand store definitions
│   │   ├── useBoundStore.js # Combined store
│   │   ├── useQuestions.js  # Questions state management
│   │   ├── useQueries.js    # Query parameters management
│   │   └── useWildcards.js  # Wildcards functionality
│   └── styles/      # Global styles
├── .eslintrc.json   # ESLint configuration
├── jsconfig.json    # JavaScript configuration
├── next.config.js   # Next.js configuration
├── package.json     # Dependencies and scripts
├── postcss.config.js # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Core Features

### Game Modes

The application offers different game modes that provide varied gameplay experiences:

1. **Standard Mode**: Answer a set number of questions across selected topics
2. **Time Trial**: Answer questions against a countdown timer
3. **Infinity Mode**: Continuous questions until incorrect answers exceed lives

### Topic Selection

Players can select from a variety of topics including:

- History
- Science
- Geography
- Entertainment
- Sports
- Art
- Technology
- General Knowledge

### Question Flow

1. User selects game mode and topics
2. Questions are generated (AI or pre-defined)
3. Questions are presented one by one
4. User selects an answer
5. Feedback is provided (correct/incorrect)
6. Score is tracked and updated
7. Final results are displayed at the end

## State Management

Kwizify uses Zustand for state management, divided into three main stores:

### Questions Store (useQuestions.js)

- Manages question data, loading states, and error handling
- Tracks current question, score, and game progress
- Handles fetching questions and updating user answers

### Wildcards Store (useWildcards.js)

- Manages wildcard availability and usage
- Implements wildcard effects (skip, half, lives)
- Resets wildcards between games

### Queries Store (useQueries.js)

- Manages URL query parameters and game configuration

These stores are combined in `useBoundStore.js` to provide a unified state management approach.

## Question Generation

Questions in Kwizify are generated through two mechanisms:

### AI-Generated Questions

The application uses Cohere AI to generate fresh questions based on selected topics:

1. A prompt is constructed with examples and topic specifications
2. The Cohere API generates questions, answers, and correct answers
3. The response is parsed and formatted for the application
4. Questions are served to the user with the correct structure

### Fallback Questions

The application includes pre-defined questions in case AI generation fails or times out.

## Wildcards System

Wildcards provide players with special abilities to help with difficult questions:

1. **Skip Card (useSkipCard)**:

   - Automatically selects the correct answer
   - Advances to the next question
   - Limited to one use per game by default
2. **Half Card (useHalfCard)**:

   - Eliminates two incorrect answers
   - Makes the correct answer easier to identify
   - Limited to one use per game by default
3. **Lives Card (useLivesCard)**:

   - Provides an extra life in certain game modes
   - Allows the player to continue after an incorrect answer
   - Limited to one use per game by default

## UI Components

### Home Components

- **MainHome**: Main landing page with title and play button
- **GameModes**: Selection interface for different game modes
- **Categories**: Topic selection interface

### Play Components

- Question display
- Answer options
- Score tracking
- Wildcard interface
- Progress indicators
- Results screen

### Utility Components

- **PageLoading**: Loading state display
- **PageError**: Error message display
- **PageFooter**: Application footer with information

## Deployment

The application can be deployed using Vercel, Netlify, or any platform supporting Next.js:

1. Build the application:

   ```
   npm run build
   # or
   yarn build
   ```
2. Start the production server:

   ```
   npm run start
   # or
   yarn start
   ```

## Environment Variables

Required environment variables:

- `COHERE_API_KEY`: API key for Cohere AI services

Create a `.env.local` file in the root directory with:

```
COHERE_API_KEY=your_api_key_here
```

## Future Improvements

Potential enhancements for future development:

1. **User Accounts**: Persistent user profiles and score tracking
2. **Leaderboards**: Global and friend-based competition
3. **Additional Game Modes**: More varied gameplay experiences
4. **Enhanced AI Integration**: More sophisticated question generation
5. **Offline Mode**: Full functionality without internet connection
6. **Customizable Difficulty**: Adjustable challenge levels
7. **Multi-language Support**: Internationalization for broader accessibility
8. **Social Sharing**: Integration with social media platforms