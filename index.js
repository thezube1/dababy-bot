const fs = require("fs");
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync("./commands");

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.substring(0, 1) === "!") {
    try {
      client.commands.get(message.content).execute(message);
    } catch (error) {
      message.reply("Not a valid command!");
    }
  }
});

client.login(process.env.BOT_TOKEN);
