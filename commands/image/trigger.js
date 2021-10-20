const { MessageEmbed, MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: 'trigger',
  description: 'Converts a users avatar in triggered format !!',
  category: "image",
  async execute(client, message, args) {
  try {
   const User = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.member;
   const wait = new MessageEmbed() // Prettier
    .setColor("#5865f2")
    .setDescription(`Please wait... I'm generating your image`);
   message.reply({ embeds: [wait] }).then((msg) => {
    (async () => {
     const triggered = await canvacord.Canvas.trigger(
      User.user.displayAvatarURL({
       dynamic: false,
       format: "png",
       size: 2048,
      })
     );
     const attachment = new MessageAttachment(triggered, "triggered.gif");
     msg.edit({ embeds: [], files: [attachment] });
    })();
   });
  } catch (err) {
   console.log(err);
   return client.createCommandError(message, err);
  }
 },
};