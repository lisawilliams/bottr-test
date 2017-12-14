const Bottr = require('bottr')
const BottrApp = require('bottr-app')
const bot = new Bottr.Bot()

// bot.on('message_received', function(message, session) {
//   session.send('Hello World')
// })

bot.use(new BottrApp())
bot.listen()

bot.hears([/thanks/i, /cheers/i, /thank you/i, /ta/i, /thx/i, /ty/i], function(message, session) {
  session.send("No problem!")
});


bot.hears([/lame joke/i], function(message, session) {
  session.send("A horse walked into a bar. Several people left seeing the potential danger in the situation.")
});














bot.hears([/Heather/i, /heather/i], function(message, session) {
  session.send("Yes?")
});

bot.hears([/Art/i, /art/i], function(message, session) {
  session.send("https://cdn-images-1.medium.com/max/1600/1*d1hQkVeugwn8XI8qK2-U_A.jpeg")
});

bot.hears([/Step 1/i, /Step One/i, /1/i, /One/i], function(message, session) {
  session.send("We admitted that we were powerless over alcohol - that our lives had become unmanageable.")
});


//
// const Bottr = require('bottr');
// const bot = new Bottr.Bot();
//
// bot.on('message_received', function(message, session) {
//   session.send('Hello World')
// })
//
// bot.listen();
