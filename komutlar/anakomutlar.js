const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__Ana Komutlar__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **dve!tavsiye** = Botun sahibine tavsiyede bulanabilirsiniz. \n"
        +                        
        "❯ **dve!kullanıcıbilgim** = Kullanıcı Bilgini Gösterir. \n"
        +                        
        "❯ **dve!döviz** = Döviz Durumunu Gösterir. \n"
        +                        
        "❯ **dve!sayaç** = Sayaç Adlı Kanal Açmanız Gerekir. \n"
        +                        
        "❯ **dve!topla** = ÖRN: dve!topla 1 1 \n"
        +                        
        "❯ **dve!çıkar** = ÖRN: dve!çıkar 1 1 \n"
        +                        
        "❯ **dve!çarp** = ÖRN: dve!çarp 1 1 \n"
        +                        
        "❯ **dve!böl**= ÖRN: dve!böl 1 1 \n"
        +                        
        "❯ **dve!canlıdestek**= Canlı Destek Başlatırsınız. \n"
        +                        
        "❯ **dve!talep**= Destek Talebi Açarsın. \n"
        +                        
        "❯ **dve!yapımcı**= Bot Yapımcısını Gösterir. \n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=505709958621429760&scope=bot&permissions=393477183) | ")
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
  name: 'anakomutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'anakomutlar'
};