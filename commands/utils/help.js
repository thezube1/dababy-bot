const playClip = require("../../modules/audio-clip");
const Discord = require("discord.js");

module.exports = {
  name: "!dahelp",
  description: "help commands",

  execute(message, args) {
    const embedHelp = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("https://github.com/thezube1/dababy-bot")
      .setURL("https://github.com/thezube1/dababy-bot")
      .setAuthor(
        "DaBaby Bot Help",
        "https://i.imgur.com/bb7gfb4.jpg",
        "https://discord.js.org"
      )
      .setImage("https://i.imgur.com/uvERCFK.png");

    message.reply(embedHelp);
  },
};
