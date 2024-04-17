const { Telegraf } = require('telegraf');
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const bot = new Telegraf('2136045481:AAFfO1sp7DJqt15mgjP7BoiUZSAcfip2cyo');

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Bot commands and launch
bot.start((ctx) => ctx.reply('Welcome! Send me some JavaScript code to evaluate.'));

bot.command('eval', async (ctx) => {
    const code = ctx.message.text.split(' ').slice(1).join(' ');

    if (!code) {
        return ctx.reply('Please provide some JavaScript code to evaluate.');
    }

    ctx.reply('Processing...');

    exec(code, (error, stdout, stderr) => {
        const output = (stdout || stderr || 'No output').toString().trim();
        const response = `${code}\n\n${output}`;

        if (response.length > 4096) {
            ctx.reply('Output is too long to display.');
        } else {
            ctx.reply(response);
        }
    });
});

bot.launch().then(() => console.log('Bot started'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// API endpoint to receive JavaScript code from frontend
app.post('/evaluate', (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: 'Please provide some JavaScript code to evaluate.' });
    }

    exec(code, (error, stdout, stderr) => {
        const output = (stdout || stderr || 'No output').toString().trim();
        res.json({ code, output });
    });
});

// Endpoint to ping the Telegram bot
app.get('/ping', (req, res) => {
    bot.telegram.getMe().then((botInfo) => {
        res.json({ botInfo });
    }).catch((error) => {
        res.status(500).json({ error: 'Failed to ping Telegram bot.' });
    });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    
