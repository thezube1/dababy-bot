const Discord = require("discord.js");
const config = require("./config.json");

const playClip = require("./audio-clip");

const client = new Discord.Client();

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content === "!lets go") {
    playClip(message, "./audio/dababy-clip.webm");
    message.reply("LETS GO!");
  }
  if (message.content === "!huh") {
    playClip(message, "./audio/huh-clip.webm");
    message.reply("HUH?!");
  }
  if (message.content === "!yeah yeah") {
    playClip(message, "./audio/yeah-clip.webm");
    message.reply("YEAH YEAH!");
  }
  if (message.content === "!jetson") {
    playClip(message, "./audio/jetson-clip.webm");
    message.reply("Oh lord, Jetson made another one");
  }
  if (message.content === "!convertible") {
    playClip(message, "./audio/convertible-clip.webm");
    message.reply("I will turn a NEIGHBOR into a convertible!");
  }
  if (message.content === "!pull up") {
    playClip(message, "./audio/pullup-clip.webm");
    message.reply("I PULL UP!");
  }
  if (message.content === "!its baby") {
    playClip(message, "./audio/its-baby-clip.webm");
    message.reply("YOU KNOW ITS BABY NEIGHBOR!");
  }
});

client.login(config.BOT_TOKEN);
