const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = 'dve!';

exports.run = (client, message) => {
  {
    let kategoriEmbed = new Discord.RichEmbed()
    
      .setTitle("__YARDIM__")
      .setThumbnail(message.author.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
                      "**dve!eğlence** - Eğlence ve Kulanıcı komutlarını gösterir. \n" +
                      "**dve!anakomutlar** - Ana komutları Gösterir. \n" +
                      "**dve!yetkili** - Yetkili komutlarını gösterir. \n" +
                      "**dve!müzik** - Müzik komutlarını gösterir. \n" +
                      "**dve!destek** - Destek komutlarını gösterir. \n"
                     )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=505709958621429760&scope=bot&permissions=393477183) | ")
    message.channel.send(kategoriEmbed)  
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y','komutlar','k'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};