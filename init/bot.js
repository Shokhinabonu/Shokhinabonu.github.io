const Telegraf = require('telegraf');

const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);
 
module.exports = bot;