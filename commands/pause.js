module.exports = {
  name: "p",
  description: "comando para pausar la transmición",
  execute(message, args) {
    const canalUsuario = message.member.voice.channel;
    const canalBot = message.guild.voice.channel;
    const conexion = message.guild.voice.connection;
if (canalUsuario){
    if (canalBot === canalUsuario) {
      const dispatcher = conexion.dispatcher;
      dispatcher.pause(true);
      //falta poner mensaje de que se ha pausado.
    } else if (!canalBot)
      message.channel.send("**¡El bot no está en ningun canal!**");
   }
   else message.reply("**¡No estás en el mismo canal que el bot!**");
  }
};
