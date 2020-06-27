const { MessageFlags } = require("discord.js");

module.exports = {
  name: "dc",
  description: "desconecta la radio",
  execute(message, args) {
    const canalUsuario = message.member.voice.channel;
    const canalBot = message.guild.voice.channel;
    if (canalUsuario) {
      if (canalUsuario === canalBot) {
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
      } else if (!canalBot) message.reply("**¡El bot no está conectado!**");
      else message.reply("**¡No estás en el mismo canal que el bot!**");
    }
  }
};
