module.exports = {
  name: "p",
  description: "comando para pausar la transmición",
  execute(message, args) {
    const canalUsuario = message.member.voice.channel;
    const vozBot = message.guild.voice;
    const conexion = message.guild.voice.connection;
if (vozBot){
    if (vozBot.channel === canalUsuario) {
      const dispatcher = conexion.dispatcher;
      dispatcher.pause(true);
      //falta poner mensaje de que se ha pausado.
    } else 
    message.reply("**¡No estás en el mismo canal que el bot!**");
   }
   else message.channel.send("**¡El bot no está en ningun canal!**");
  }
}; //prueba
