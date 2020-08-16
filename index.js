require('dotenv').config({ path: './env/.env.dev' });  //comment out this line before deploying to prod
// require('dotenv').config({ path: './env/.env.prod.yaml' });

const bot = require('./init/bot');
const handleTextRequests = require('./controllers/handleTextRequests');
const handleUnexpectedRequests = require('./controllers/handleUnexpectedRequests');

//TODO provide a helpful help
bot.help((context) => {
    context.reply('A placeholder for the help guide');
});

//Handle text messages
bot.on('text', (context) => {
    handleTextRequests(context);
});

//avoid timeouts with unsupported commands
bot.on('message', context => {
    handleUnexpectedRequests(context);
});

const ENV = process.env.ENV;

if (ENV === "development") {
    bot.launch().then(r => {
        console.log(r);
    })
} else if (ENV === "production") {
    bot.telegram
        //FUNCTION_TARGET is reserved Google Cloud Env
        .setWebhook(`https://${process.env.GOOGLE_CLOUD_REGION}-${process.env.GOOGLE_CLOUD_PROJECT_ID}.cloudfunctions.net/${process.env.FUNCTION_TARGET}`)
        .then(r => {
            console.log(r);
        })

    exports.telegramBotWebhook = (req, res) => {
        bot.handleUpdate(req.body, res);
    };
} else {
    throw new Error("Unknown environment!");
}
