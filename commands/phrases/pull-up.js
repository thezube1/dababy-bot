const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!pull up",
  description: "Pull up!",

  execute(message, args) {
    playClip(message, "./audio/pullup-clip.webm");
    message.reply("I PULL UP!");
  },
};
