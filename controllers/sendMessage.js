const markupKeyboard = require('../util/markupKeyboard')

const sendMessage = async (context, messageText, imageUrl = ``) => {
    try {
        await context.reply(messageText, markupKeyboard);
        //TODO replace with a normal logging
        console.log(`Sent the message`, messageText, `Context:`, context);

        if (imageUrl !== ``) {
            await context
                .replyWithMediaGroup([
                        {
                            media: { source: imageUrl },
                            caption: ``,
                            type: 'photo'
                        }
                    ]
                );
            //TODO replace with a normal logging
            console.log(`Sent an image!`, messageText, `Context:`, context);
        }
    } catch (e) {
        //TODO replace with a normal logging
        console.log(`An uncaught exception!`, e, `Context:`, context);
        context.reply(`An error occurred! Please try again!`, markupKeyboard)
    }
}

module.exports = sendMessage;