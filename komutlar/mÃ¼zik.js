const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__MÜZİK__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **dve!çal** - ismini yazdığınız şarkıyı çalar. \n"
        +                        
        "❯ **dve!kapat** - şarkıyı kapatır. \n"     
        +                        
        "❯ **dve!geç** - bir sonraki şarkıya geçersiniz. \n" 
        +        
        "❯ **dve!durdur** - şarkıyı durdurur. \n"
        +
        "❯ **dve!devam** - duran şarkıyı devam ettirir. \n"
        +
        "❯ **dve!ses** - şarkının ses seviyesini ayarlarsınız 1-10.\n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=500333603553542175&scope=bot&permissions=393460799)")
    message.channel.send(kategoriEmbed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};