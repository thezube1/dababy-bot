const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!jetson",
  description: "Jetson!",

  execute(message, args) {
    playClip(message, "./audio/jetson-clip.webm");
    message.reply("Oh lord, Jetson made another one");
  },
};
