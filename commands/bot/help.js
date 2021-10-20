const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name: 'help',
    category: 'bot',
    description: 'Returns all Commmands, or one specific command',

    execute(client, message, args) {

        const helpMessageEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('List of Elio commands:')
        .setDescription(`https://github.com/Eliorian/Elio/blob/main/help.md`)
        
        message.reply({embeds: [helpMessageEmbed]})
    }
        
}