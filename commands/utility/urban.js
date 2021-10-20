const { MessageEmbed } = require("discord.js");
const axios = require('axios');

module.exports = {
  name: "urban",
  category: "utility",
  description: "Search meaning of slang words, and phrases",

  async execute(client, message, args) {
    let query = args.join(' ');
    if (!query)
      return message.reply({ content: 'Please specify a word to search for!' });

    query = encodeURIComponent(query);

    const {
      data: { list },
    } = await axios.get(
      `https://api.urbandictionary.com/v0/define?term=${query}`
    );

    const [answer] = list;

    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle(answer.word)
          .setURL(answer.permalink)
          .setColor('RANDOM')
          .addField('DEFINITION', trim(answer.definition))
          .addField('EXAMPLE', trim(answer.example))
          .addField(
            'RATINGS',
            `${answer.thumbs_up} 👍 || ${answer.thumbs_down} 👎`
          ),
      ],
    });
  },
};

function trim(input) {
  return input.length > 1024 ? `${input.slice(0, 1020)} ...` : input;
}
