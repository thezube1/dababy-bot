const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!its baby",
  description: "Huh!",

  execute(message, args) {
    playClip(message, "./audio/its-baby-clip.webm");
    message.reply("YOU KNOW ITS BABY NEIGHBOR!");
  },
};
