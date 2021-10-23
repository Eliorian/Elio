var figlet = require('figlet');

module.exports = {
  name: 'ascii',
  description: 'Converts text info ASCII',
  category: "fun",
  async execute(client, message, args) {
if(!args[0]) return message.reply('Please enter a word to be translated to ascii');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
              message.delete();
           })
}
};
