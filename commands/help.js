const prefix = process.env.prefix;

module.exports = {
    name: 'help',
    description: 'Envia un mensaje con todos los comandos disponibles del bot.',
    execute(message, args, comandos) {
        var mensaje = '**Lista de COMANDOS de la Xukys Radio:** \n';

        for (let [commandName, commandDescription] of comandos)
            mensaje = mensaje + `${prefix}***${commandName}*** : __${commandDescription.description}__ \n`;

        mensaje = mensaje + '\n\`Bot programado por: Arturo Lecuona \nIG: @arturolecuona\`';

        const directMessage = message.author.createDM()
            .then(() => {
                message.author.dmChannel.send(mensaje);
            })
            .catch(console.error);
    }
};