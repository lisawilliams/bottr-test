const Bottr = require('bottr')
const BottrApp = require('bottr-app')
const bot = new Bottr.Bot()

bot.on('message_received', function(message, session) {
  session.send('Hello World')
})

bot.use(new BottrApp())
bot.listen()


//
// const Bottr = require('bottr');
// const bot = new Bottr.Bot();
//
// bot.on('message_received', function(message, session) {
//   session.send('Hello World')
// })
//
// bot.listen();
