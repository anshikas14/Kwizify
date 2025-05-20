# Kwizify

Kwizify is an interactive quiz/trivia game with AI-generated questions. Players can select different game modes and topics, and use wildcards to help answer challenging questions.

## Features

- **Multiple Game Modes**: Choose from various gameplay options
- **Diverse Topics**: Select from a wide range of quiz categories
- **AI-Generated Questions**: Fresh and unique questions created by AI
- **Helpful Wildcards**: Use special aids when you're stuck on difficult questions
- **Responsive Design**: Play seamlessly on desktop or mobile devices
- **Interactive UI**: Engaging animations and visual feedback

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Zustand (State Management)
- Cohere AI API

## Installation

1. Clone the repository:

   ```
      git clone https://github.com/anshikas14/Kwizify.git   
   ```
2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Cohere AI API key:

   ```
   COHERE_API_KEY=your_api_key_here
   ```
4. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## How to Play

1. **Start a Game**: Click the "Play" button on the home screen
2. **Select Mode**: Choose your preferred game mode
3. **Pick Topics**: Select one or more categories for your questions
4. **Answer Questions**: Read each question carefully and select your answer
5. **Use Wildcards**: If you're stuck, use available wildcards to help
6. **Track Progress**: Monitor your score and progress through the quiz
7. **Complete the Quiz**: Finish all questions to see your final score

## Building for Production

```
npm run build
# or
yarn build
```

Start the production server:

```
npm run start
# or
yarn start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Question generation powered by Cohere AI
- Special thanks to all contributors and testers
