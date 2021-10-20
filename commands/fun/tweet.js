const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "tweet",
  category: "fun",
  description: "Tweet something!",

  async execute(client, message, args) {
    const text = args.join(' ');
    if (!text) return message.reply('Please specify a text!');
    fetch(
      `https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${text}`
    )
      .then((res) => res.json())
      .then((data) => {
        let embed = new MessageEmbed()
          .setTitle('Tweet!')
          .setImage(data.message)
          .setColor('BLUE')
          .setTimestamp();
        message.channel.send({ embeds: [embed] });
      });
  },
};