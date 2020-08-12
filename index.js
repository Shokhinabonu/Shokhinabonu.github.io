const TelegramBot=require('node-telegram-bot-api')
const TOKEN='1363961260:AAEqUsw2yqfnWdM5SQmBcB9frTw3Myc_3AA'
const fetch=require('node-fetch');
const fs = require('fs')
/*const date =new Date().getDate() 
const month=new Date().getMonth()+1
const year=new Date().getFullYear() */

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
                            text: "Astronomy Basics",
                            callback_data: 'AB'
                        }
                    ],
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
if(query.data =='AB'){
    bot.sendMessage(id, '           Astronomy Basics\n      When people hear the word "astronomy", they usually think of stargazing. That\'s actually how it got started — by people looking at the sky and charting what they saw. "Astronomy" comes from two old Greek terms astron for "star" and nomia for "law", or "laws of the stars". That idea actually underlies the history of astronomy: a long road of figuring out what objects in the sky are and what laws of nature govern them. To reach an understanding of cosmic objects, people had to do a lot of observing. That showed them the motions of objects in the sky, and led to the first scientific comprehension of what they might be\. \n     Throughout human history, people have "done" astronomy and eventually found that their observations of the sky gave them clues to the passage of time. It should be no surprise that people began to to use the sky more than 15,000 years ago. It provided handy keys for navigation and calendar-making thousands of years ago. With the invention of such tools as the telescope, observers began to learn more about the physical characteristics of the stars and planets, which led them to wonder about their origins. The study of the sky moved from a cultural and civic practice to the realm of science and mathematics. ')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/AstronomyBasics.jpg"))
}else if(query.data =='TS'){
    bot.sendMessage(id, 'The Stars \n       So, what are the main targets that astronomers study? Let\'s start with stars — the heart of astronomy studies. Our Sun is a star, one of perhaps a trillion stars in the Milky Way Galaxy.The galaxy itself is one of countless galaxies in the universe. Each one contains huge populations of stars. Galaxies themselves are collected together into clusters and superclusters that make up what astronomers call the "large-scale structure of the universe".')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/TheStars.jpeg"))
}else if(query.data =='TP'){
    bot.sendMessage(id, 'The Planets \n     Our own solar system is an active area of study. Early observers noticed that most stars did not appear to move. But, there were objects that seemed to wander against the backdrop of stars. Some moved slowly, others relatively quickly throughout the year. They called these "planetes", the Greek word for "wanderers". Today, we simply call them "planets." There are also asteroids and comets "out there", which scientists study as well. ')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/ThePlanets.jpeg"))
}else if(query.data =='DS'){
    bot.sendMessage(id, 'Deep Space/n       Stars and planets aren\'t the only thing that populate the galaxy. Giant clouds of gas and dust, called "nebulae" (the Greek plural term for "clouds") are also out there. These are places where stars are born, or sometimes are simply the remains of stars that have died. Some of the weirdest "dead stars" are actually neutron stars and black holes. Then, there are quasars, and weird "beasts" called magnetars, as well as colliding galaxies, and much more. Beyond our own galaxy (the Milky Way), lie an amazing collection of galaxies ranging from spirals like our own to lenticular-shaped ones, spherical, and even irregular galaxies.')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/DeepSpace.jpg"))
}else if(query.data =='SU'){
    bot.sendMessage(id, 'Studying the Universe \n       As you can see, astronomy turns out to be a complex subject and it requires several other scientific disciplines to help solve the mysteries of the cosmos.To do a proper study of astronomy topics, astronomers combine aspects of mathematics, chemistry, geology, biology, and physics.\n      The science of astronomy is broken into separate sub-disciplines. For example, planetary scientists study worlds (planets, moons, rings, asteroids, and comets) within our own solar system as well as those orbiting distant stars. Solar physicists focus on the Sun and its effects on the solar system. Their work also helps forecast solar activity such as flares, mass ejections, and sunspots.\n      Astrophysicists apply physics to the studies of stars and galaxies to explain exactly how they work. Radio astronomers use radio telescopes to study the radio frequencies given off by objects and processes in the universe. Ultraviolet, x-ray, gamma-ray, and infrared astronomy reveals the cosmos in other wavelengths of light. Astrometry is the science of measuring distances in space between objects. There are also mathematical astronomers who use numbers, calculations, computers, and statistics to explain what others observe in the cosmos. Finally, cosmologists study the universe as a whole to help explain its origin and evolution across nearly 14 billion years of time.')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/StudyingTheUniverse.jpg"))
}else if(query.data =='AT'){
    bot.sendMessage(id,'Astronomy Tools\n       Astronomers use observatories equipped with powerful telescopes that help them magnify the view of dim and distant objects in the universe. Astronomy tools, like the armillary sphere, were used by early astronomers and new tools came about as the study of astronomy evolved. They also use instruments called spectrographs that dissect the light from stars, planets, galaxies, and nebulae, and reveal more details about how they work. Specialized light meters (called photometers) help them measure the varying stellar brightnesses. Well-equipped observatories are scattered around the planet. They also orbit high above Earth\'s surface, with such spacecraft as Hubble Space Telescope providing clear images and data from space. To study distant worlds, planetary scientists send spacecraft on long-term expeditions, Mars landers such as Curiosity, Cassini Saturn mission, and many, many others. Those probes also carry instruments and cameras that provide data about their targets. ')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/AstronomyTools.jpg"))
}else if(query.data =='WSA'){
    bot.sendMessage(id,'Why Study Astronomy?\n      Looking at the stars and galaxies helps us understand how our universe came into being and how it works. For example, knowledge of the Sun helps explain stars. Studying other stars gives insight into how the Sun works. As we study more distant stars, we learn more about the Milky Way. Mapping our galaxy tells us about its history and what conditions existed that helped our solar system form. Charting other galaxies as far as we can detect teaches lessons about the larger cosmos.There is always something to learn in astronomy. Each object and event tells a tale of cosmic history.\n      In a very real sense, astronomy gives us a sense of our place in the universe. The late astronomer Carl Sagan put it very succinctly when he stated, "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."')
    bot.sendPhoto(id, fs.readFileSync(__dirname+"/WhyStudyAstronomy.jpg"))
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