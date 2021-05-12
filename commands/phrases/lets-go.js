const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!lets go",
  description: "Lets go!",

  execute(message, args) {
    playClip(message, "./audio/dababy-clip.webm");
    message.reply("LETS GO!");
  },
};
