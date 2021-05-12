const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!huh",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/huh-clip.webm");
    message.reply("HUH?!");
  },
};
