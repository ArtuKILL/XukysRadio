require('dotenv').config();
const prefix = process.env.prefix;
const token = process.env.token;
const Discord = require("discord.js"); 
const client = new Discord.Client();
const color = require("colors"); 
const fs = require("fs");
const { codePointAt } = require('ffmpeg-static');
const http = require('http');
const voice = client.voice;



client.commands = new Discord.Collection();


const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js")); 

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {  
  console.log("XukysBot".rainbow.bold + " ¡EN MARCHA!".green.bold);
});

client.on("message", message => { 
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return; 

  try {
    client.commands.get(command).execute(message, args); //ejecuta comando
  } catch (error) {
    console.error(error);
    message.reply("¡Ha habido un error ejecutando el comando!");
  }
});


client.login(token);

module.exports = client.commands;
