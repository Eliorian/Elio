const { MessageEmbed } = require("discord.js");
const { Calculator } = require("weky");

module.exports = {
  name: "calculator",
  description: "calculator in discord",
  category: 'utility',
  async execute(client, message, args) {
    await Calculator({
        message: message,
        embed: {
            title: 'Calculator',
            color: client.config.app.color,
            footer: 'Calculator on Discord',
            timestamp: true
        },
        disabledQuery: 'Calculator is disabled!',
        invalidQuery: 'The provided equation is invalid!',
        othersMessage: 'Only <@{{author}}> can use the buttons!'
    });
  },
};
