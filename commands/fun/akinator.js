const akinator = require('discord.js-akinator');

module.exports = {
  name: 'akinator',
  description: 'Play akinator games',
  aliases: ['aki'],
  category: "fun",
  async execute(client, message, args) {
    akinator(message, client);
  },
};
