const client = require('nekos.life');
const { MessageEmbed} = require("discord.js");
const neko = new client();

module.exports = {
  name: 'pussywank',
  description: 'Show pussy masturbation image',
  category: "nsfw",
  async execute(client, message, args) {
  const wait_embed = new MessageEmbed()
  .setColor("#5865f2")
  .setDescription(`Your picture is being prepared...`);	  
  message.reply({ embeds: [wait_embed] }).then((process_message) => {
  var errMessage = "This is not an NSFW Channel";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.pussyWankGif());

      const embed = new MessageEmbed()
       .setTitle(
        `Masturbation`,
        )
       .setImage(owo.url)
       .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({
         dynamic: true,
         format: "png",
         size: 2048,
        })
       );
      process_message.edit({ embeds: [embed]});

}

      work();
    })
  }
}

