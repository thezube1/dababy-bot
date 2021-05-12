const fs = require("fs");

const playClip = (message, clipPath) => {
  var voiceChannel = message.member.voice.channel;
  if (voiceChannel) {
    voiceChannel
      .join()
      .then((connection) => {
        const dispatcher = connection.play(fs.createReadStream(clipPath), {
          type: "webm/opus",
        });

        dispatcher.on("start", () => {});
        dispatcher.on("finish", () => {
          connection.disconnect();
        });
      })

      .catch((err) => console.log(err));
  }
};

module.exports = playClip;
