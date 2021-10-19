const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'chat',
  description: 'Chat with the bot!',
  category: "fun",
  async execute(client, message, args) {
    const input = args.join(' ');
    if (!input) return;
    fetch(
      `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(input)}&uid=${
        message.author.id
      }`
    )
      .then((res) => res.json())
      .then((body) => {
        message.reply(body.response);
      });
  },
};
