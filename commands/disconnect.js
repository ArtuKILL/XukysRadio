const { MessageFlags } = require("discord.js");

module.exports = {
  name: "dc",
  description: "Desconecta el bot de la radio del canal de voz.",
  execute(message, args) {
    const canalUsuario = message.member.voice.channel;
    const vozBot = message.guild.voice;
    console.log(`${message} ${message.guild} ${message.guild.voice}`.red);
    if (vozBot){
      if (canalUsuario === vozBot.channel) {
        canalUsuario.leave();
        message.channel.send(
          `<@${message.author.id}> has apagado la XukysFiesta :(`
        );
        console.log(
          "¡Bot Desconectado!".gray.bold +
            ` En: ${message.guild}`.magenta +
            ` Por: ${message.author.username} <${message.author.id}>`.underline
              .bold
        );
      } else  message.reply("**¡No estás en el mismo canal que el bot!**");
    }
    else message.reply("**¡El bot no está conectado!**"); 
  }
};
