const playClip = require("../../modules/audio-clip");

module.exports = {
  name: "!yeah yeah",
  description: "Yeah yeah!",

  execute(message, args) {
    playClip(message, "./audio/yeah-clip.webm");
    message.reply("YEAH YEAH!");
  },
};
