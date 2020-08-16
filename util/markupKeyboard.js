const Markup = require('telegraf/markup');

const markupKeyboard = Markup.keyboard([
          [`✨The stars`, `🌎The Planets`],
          [`👽Deep Space`, `🛰Studying the Universe`],
          [`📡Astronomy Tools`, `Why Study Astronomy❓`],
          [`🌠Nasa Picture of the Day`]
    ])
    .extra();

module.exports = markupKeyboard;