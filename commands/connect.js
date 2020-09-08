module.exports = {
  name: "c",
  description: "Conecta el bot de la radio al canal de voz.",
  execute(message, args, comandos) {
    var volumen = parseFloat(args[0]);
    const stream = "https://radio.loes.es/8004/stream";
    const canal = message.member.voice.channel;
    if (volumen > 1 || volumen < 0.1 || isNaN(args[0])) volumen = 0.3;
    if (canal) {
      canal.join().then(connection => {
        console.log(
          "En reproducción: ".bold +
            `${stream}`.red +
            ` Volumen: ${volumen}`.green +
            ` En: ${message.guild} `.magenta +
            `Por: ${message.author.username} <${message.author.id}>`
              .underline.bold
        );
        const dispatcher = connection.play(stream, { volume: volumen, highWaterMArk: 50 });
        dispatcher.on("end", () => canal.leave());
      });
      message.channel.send(
        `¡<@${message.author.id}> ha prendido la XukysFiesta!`
      );
    } else {
      message.reply("**¡Entra a un canal de voz primero!**");
    }
  }
};
