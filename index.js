const TelegramBot=require('node-telegram-bot-api')
const TOKEN='1363961260:AAEqUsw2yqfnWdM5SQmBcB9frTw3Myc_3AA'
const fetch=require('node-fetch');
const fs = require('fs')
const text=require('./Model/text')


const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300, 
        autostart: true,
        params:{
            timeout: 10
        }
    }
})//newTelegramBot
bot.on('message', (msg) => {
    const {id} = msg.chat

    if(msg.text==="/start"){
        bot.sendMessage(id, 'Hello, '+msg.from.first_name+'! What do you want to learn about today?',{
            reply_markup:{
                inline_keyboard: [
                   
                    [
                        {
                            text: "The Stars",
                            callback_data: 'TS'
                        }
                    ],
                    [
                        {
                            text: "The Planets",
                            callback_data: 'TP'
                        }
                    ],
                    [
                        {
                            text: "Deep Space",
                            callback_data: 'DS'
                        }
                    ],
                    [
                        {
                            text: "Studying the Universe",
                            callback_data: 'SU'
                        }
                    ],
                    [
                        {
                            text: "Astronomy Tools",
                            callback_data: 'AT'
                        }
                    ],
                    [
                        {
                            text: "Why Study Astronomy?",
                            callback_data: 'WSA'
                        }
                    ],
                    [
                        {
                            text: "Nasa Picture of the Day",
                            callback_data: 'NASA'
                        }
                    ]
                ]
            }
        })

bot.on('callback_query',query =>{
if(query.data =='TS'){
    bot.sendMessage(id, text.TheStarsText)
    bot.sendPhoto(id, './View/TheStars.jpeg')
}else if(query.data =='TP'){
    bot.sendMessage(id, text.ThePlanetsText)
    bot.sendPhoto(id,'./View/ThePlanets.jpeg')
}else if(query.data =='DS'){
    bot.sendMessage(id, text.DeepSpaceText)
    bot.sendPhoto(id, './View/DeepSpace.jpg')
}else if(query.data =='SU'){
    bot.sendMessage(id, text.StudyingTheUniversetext)
    bot.sendPhoto(id, './View/StudyingTheUniverse.jpg')
}else if(query.data =='AT'){
    bot.sendMessage(id, text.AstronomyToolsText)
    bot.sendPhoto(id, './View/AstronomyTools.jpg')
}else if(query.data =='WSA'){
    bot.sendMessage(id,text.WhyStudyAstronomytext)
    bot.sendPhoto(id, './View/WhyStudyAstronomy.jpg')
}else if(query.data == 'NASA'){
    PicOfTheDay()
}

})

    } else{
    }
     
 

      async function PicOfTheDay(){
        let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=TfvhEpzDgwuJiWRluOmrJL5mv9U9IRE4M2rEaItq');
        let data= await response.json()
        if(data.code===404){
            bot.sendMessage(id, data.msg)
        }else{
        bot.sendMessage(id, data.title+"\n"+data.explanation+'\nCopyright: '+data.copyright+'\n'+data.url )}

      }


 


  
})//turningBotOn