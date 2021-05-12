const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!convertible",
  description: "Convertible!",

  execute(message, args) {
    playClip(message, "./audio/convertible-clip.webm");
    message.reply("I will turn a NEIGHBOR into a convertible!");
  },
};
