const sendMessage = require('../controllers/sendMessage');

const handleUnexpectedRequests = (context) => {
    //TODO implement a proper logging
    console.log("Unexpected content type!");
    sendMessage(context, `I wish I could respond to what you sent, but, sadly, I can't... Sorry! Maybe try asking something else? Preferably, about space and astronomy!🌠👽🛰 (and aliens of course!)`);
}

module.exports = handleUnexpectedRequests;