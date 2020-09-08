module.exports = {
  name: "ping",
  description: "Pong!",
  execute(message, args, comandos){
    message.channel.send('**¡Pong!**');
  }
};