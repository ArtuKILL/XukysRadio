module.exports = {
  name: "r",
  description: "Si el bot esta en modo pausa, reanuda la transmisión",
  execute(message, args) {
    const canalBot = message.guild.voice.channel;
    const canalUsuario = message.member.voice.channel;
    const conexion = message.guild.voice.connection;

    if (canalBot === canalUsuario) {
      const dispatcher = conexion.dispatcher;
      dispatcher.resume();
    } else if (!canalBot)
      message.channel.send("¡El bot no está en ningun canal!");
    else message.reply("¡No estás en el mismo canal que el bot!");
  }
};
