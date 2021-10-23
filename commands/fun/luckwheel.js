const { MessageEmbed} = require("discord.js");

module.exports = {
  name: 'luckwheel',
  description: 'Flips a luck wheel',
  category: "fun",
  async execute(client, message, args) {
  let slots = ["🍎",  "🍌", "🍒", "🍓", "🍈"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let msg = await message.channel.send("Wheel spinning...");
  let aicon = message.author.displayAvatarURL;    
      if (slots[result1] === slots[result2] && slots[result3]){ 
      let wEmbed = new MessageEmbed()
       .setFooter("You won!!",aicon)
       .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("#f4e842");
      await message.channel.send({embeds: [wEmbed]});
       
          }else {
       
       let embed = new MessageEmbed()
       .setFooter('You lose',aicon)
       .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("#f4e842");
     await  message.channel.send({embeds: [embed]});
      
       }   
  if (slots[result1] ==  slots[result2] == slots[result1] && slots[result3] == slots[result1]){
    let embed = new MessageEmbed()
       .setFooter('You won!!',aicon)
       .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("#f4e842");
     await  message.channel.send({embeds: [embed]});
    }
}
}