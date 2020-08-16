const astronomyBrain= require('../data/AstronomyBrain');
const sendMessage = require('../controllers/sendMessage');
const picOfTheDay = require('../api/nasa');

const handleTextRequests = (context) => {
    const message = context.message.text;

    //Only one dot in the paths for all images! because it is relative to the project root
    switch (message) {
        case `/start`:
            sendMessage(context, `Hello, ${context.chat.first_name}! What do you want to learn about today?`);
            break;
        case `✨The stars`:
        case '/ts':
            sendMessage(context, astronomyBrain.TheStarsText, `./img/TheStars.jpeg`);
            break;
        case `🌎The Planets`:
        case '/tp':
            sendMessage(context, astronomyBrain.ThePlanetsText, `./img/ThePlanets.jpeg`);
            break;
        case `👽Deep Space`:
        case '/ds':
            sendMessage(context, astronomyBrain.DeepSpaceText, `./img/DeepSpace.jpg`);
            break;
        case `🛰Studying the Universe`:
        case '/stu':
            sendMessage(context, astronomyBrain.StudyingTheUniverseText, `./img/StudyingTheUniverse.jpg`);
            break;
        case `📡Astronomy Tools`:
        case '/at':
            sendMessage(context, astronomyBrain.AstronomyToolsText, `./img/AstronomyTools.jpg`);
            break;
        case `Why Study Astronomy❓`:
        case '/wsa':
            sendMessage(context, astronomyBrain.WhyStudyAstronomyText, `./img/WhyStudyAstronomy.jpg`);
            break;
        case `🌠Nasa Picture of the Day`:
        case '/npt':
            picOfTheDay()
                .then(NASAResponse => {
                    sendMessage(context, NASAResponse);
                });
            break;
        default:
            sendMessage(context, `I wish I could respond to what you sent, but, sadly, I can't... Sorry! Maybe try asking something else? Preferably, about space and astronomy!🌠👽🛰 (and aliens of course!)`);
    }
}
module.exports = handleTextRequests;