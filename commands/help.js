const prefix = process.env.prefix;

module.exports = {
    name: 'help',
    description: 'Envia un mensaje con todos los comandos disponibles del bot.',
    execute(message, args) {
        var helpMessage = '**Lista de COMANDOS de la Xukys Radio:** \n';
        
        for (let [commandName, commandDescription] of require('../index.js')) 
            //Asignar require('../index.js') a una variable. Es una colección de comandos.
            helpMessage = helpMessage + `${prefix}***${commandName}*** : __${commandDescription.description}__ \n`;

        helpMessage = helpMessage + '\n\`Bot programado por: Arturo Lecuona \nIG: @arturolecuona\`';

        const directMessage = message.author.createDM()
            .then(() => {
                message.author.dmChannel.send(helpMessage);
            })
            .catch(console.error);
    }
};