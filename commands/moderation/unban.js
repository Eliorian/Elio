const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  category: "moderation",
  description: "Unban a user from Server by their User ID",

  async execute(client, message, args) {
    const id = args.join(' ');
    if (!id)
      return message.reply({ content: 'Please send a User ID to unban!' });

    const bannedMembers = await message.guild.bans.fetch();
    if (!bannedMembers.find((user) => user.user.id === id))
      return message.reply({ content: 'User is not Banned!' });

    message.guild.members.unban(id);
    message.reply({ content: 'Unbanned User!' });
  },
};