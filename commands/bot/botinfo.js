//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

function timeCon(time) {
    time = time * 1000
    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
    days = Math.floor(time / 86400000)
    time -= days * 86400000
    hours = Math.floor(time / 3600000)
    time -= hours * 3600000
    minutes = Math.floor(time / 60000)
    time -= minutes * 60000
    seconds = Math.floor(time / 1000)
    time -= seconds * 1000
    days = days > 9 ? days : "" + days
    hours = hours > 9 ? hours : "" + hours
    minutes = minutes > 9 ? minutes : "" + minutes
    seconds = seconds > 9 ? seconds : "" + seconds
    return (parseInt(days) > 0 ? days + " day " : " ") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + " hours ") + minutes + " minutes " + seconds + " seconds "
};

module.exports = {
    name: 'botinfo',
    category: 'bot',
    description: 'Returns all Commmands, or one specific command',
	
    execute(client, message, args) {
    const { MessageEmbed } = require('discord.js');;
	
    const release = require("os")
    var guild = message.guild;
    const embed = new MessageEmbed()
        embed.setColor('#7d5bbe')
        embed.setTitle(client.user.username + " Release: " + "1.0.0" + ` Status`)
        embed.setDescription(client.user.username + ' Active Time' + timeCon(process.uptime()))
        embed.addField('🏠 Servers', client.guilds.size, true)
        embed.addField('📄 Channels', client.channels.size, true)
        embed.addField('🤵 Users', client.users.size, true)
        embed.addField('🏓 Bot Ping', `${(client.ping).toFixed(0)} ms`, true)       
			console.log("botStatus Commands Used By" + message.author.username)
    message.channel.send({ embed: embed })
    }
}
