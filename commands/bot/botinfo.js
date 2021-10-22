const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const osutils = require("os-utils");
const osu = require("node-os-utils");
const cpu = osu.cpu;
const os = osu.os;
const proc = osu.proc;
const { dependencies } = require("../../package.json");

module.exports = {
  name: 'botinfo',
  description: 'Sends detailed info about the client',
  category: "bot",
  async execute(client, message, args) {
  try {
   const botuptime = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
   function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
   const wait_embed = new MessageEmbed()
    .setColor("#5865f2")
    .setDescription(`I'm collecting info about myself. Please wait...`);
   message.reply({ embeds: [wait_embed] }).then((process_message) => {
    cpu.usage().then((cpupercentage) => {
      const embed = new MessageEmbed()
       .setTitle(
        `Generic Information`,
        message.guild.iconURL({
         dynamic: true,
         format: "png",
        })
        )
       .addField(`Guild Count`, `\`${client.guilds.cache.size} guilds\``, true)
       .addField(`User Count`, `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members\``, true)
       .addField(`Channel Count`, `\`${client.channels.cache.size} channels\``, true)
       .addField(`Operating System`, "```" + capitalize(osutils.platform()) + " (" + os.arch() + ")```", true)
       .addField(`Tools`, `\`\`\`Node.js: ${process.version} | Discord.js: ${dependencies["discord.js"].replace("^", "v")}\`\`\``)
       .addField(`Uptime`, `\`\`\`${botuptime}\`\`\``)
       .addField(`Ping`, `\`\`\`Bot: ${Math.round(client.ws.ping)}ms | API: ${(Date.now() - message.createdTimestamp).toString().replace(/-/g, "")}ms\`\`\``)
       .addField(`CPU`, "```" + cpu.model() + " (" + cpu.count() + " cores)" + " [" + cpupercentage + "% used]```")
       .addField(`RAM Usage`, `\`\`\`VPS: ${(osutils.totalmem() - osutils.freemem()).toString().split(".")[0] + "." + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split("")[0] + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split("")[1]}/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split("")[0] + osutils.totalmem().toString().split(".")[1].split("")[1]}MB (${(100 - osutils.freememPercentage() * 100).toString().split(".")[0] + "." + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split("")[0] + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split("")[1]}%)\nBOT: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split("")[0] + osutils.totalmem().toString().split(".")[1].split("")[1]}MB (${((100 * (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)) / osutils.totalmem().toString().split(".")[0]).toFixed(2)} %)\`\`\``)
       .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({
         dynamic: true,
         format: "png",
         size: 2048,
        })
       );
      process_message.edit({ embeds: [embed]});
     });
    });
  } catch (err) {
   console.log(err);
  }
 },
};

