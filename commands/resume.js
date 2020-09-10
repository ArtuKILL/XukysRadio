module.exports = {
  name: "r",
  description: "Si el bot esta en modo pausa, reanuda la transmisión.",
  execute(message, args) {
    const vozBot = message.guild.voice;
    const canalUsuario = message.member.voice.channel;
    if (vozBot){
      if (vozBot.channel === canalUsuario) {
        const conexion = vozBot.connection;
        const dispatcher = conexion.dispatcher;
        dispatcher.resume();
        //falta poner mensaje de que se ha reanudado.
      } else
        message.channel.send("**¡El bot no está en ningun canal!**");
     }
     else message.reply("**¡No estás en el mismo canal que el bot!**");
    }
  };
