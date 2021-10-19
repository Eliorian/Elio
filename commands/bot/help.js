const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    category: 'bot',
    aliases: ['h'],
    utilisation: '{prefix}help',
    description: 'Returns all Commmands, or one specific command',

    execute(client, message, args) {

        const embed = new MessageEmbed();
       
        embed.setColor(client.config.app.color);
        embed.setTitle("Elio's Commands");;
		embed.setDescription("**chat** Chat with the bot! [Usage]: s!chat [text]" +
                "\n\n **akinator**: Play akinator games" +
                "\n\n **calculator**: Calculator in discord" +
			    "\n\n **maps or gmaps**: Returns information about a location" +
                "\n\n **wheater**: Show statistic weather for country or city search")
        embed.setFooter(`Info & Support mail: info@eliorian.com`)

        message.channel.send({ embeds: [embed] });
    },
};