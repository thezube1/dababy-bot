module.exports = {
  name: "!reset",
  description: "reset",

  execute(message, args) {
    var voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
      voiceChannel.leave();
    }
  },
};
