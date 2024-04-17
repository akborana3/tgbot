# Telegram Bot for JavaScript Code Evaluation

This Telegram bot allows you to evaluate JavaScript code snippets directly from your Telegram chat. Simply send the code snippet to the bot, and it will execute it and return the result.

## Features

- Evaluate JavaScript code snippets in real-time.
- Receive the output directly in your Telegram chat.
- Handles long output by sending it as a file attachment.
- Easy to deploy on Vercel.

## Usage

1. Add the bot to your Telegram: [Bot Link](https://t.me/YourBotName).
2. Start a chat with the bot.
3. Send JavaScript code snippets using the `/eval` command followed by the code.

Example:
/eval console.log('Hello, world!');

## Deployment

You can deploy this bot to Vercel with a single click using the following button:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/akborana3/tgbot/tree/main)

## Local Development

To run the bot locally, follow these steps:

1. Clone this repository.
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
3. Start the backend server:
   npm start
4. Open the frontend/index.html file in your browser to access the frontend interface.
5. Interact with the bot by entering JavaScript code snippets and clicking the "Evaluate" button.
6. Configuration
To use your own Telegram Bot API token, replace 'YOUR_BOT_TOKEN' in backend/index.js with your actual token.

Dependencies
Telegraf: Telegram bot framework for Node.js.
Express: Web framework for Node.js.
Body-parser: Middleware for parsing JSON bodies in Express.
License
This project is licensed under the MIT License - see the LICENSE file for details.
