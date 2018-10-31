const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__YETKİLİ__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **dve!kick** = İstediğiniz kişiyi sunucudan atar.\n"
        +                        
        "❯ **dve!ban** = İstediğiniz kişiyi sunucudan banlar.\n"
        +                        
        "❯ **dve!unban** = İstediğiniz kişinin banını açar. \n"        
        +
        "❯ **dve!temizle** =  Belirttiğiniz kadar mesaj siler. \n"
        +
        "❯ **dve!duyuru** = Güzel bir duyuru görünümü sağlar. \n"
        +
        "❯ **dve!oylama** = Oylama Açar \n"        
        +     
        "❯ **dve!sustur** = @Kişi sustur. \n"
        +
        "❯ **dve!kilit** = Yazı kanalını istediğiniz süre boyunca dondurur. \n"
        +
        "❯ **dve!duyuru** = Güzel bir duyuru görünümü sağlar. \n"
        +
        "❯ **dve!uyar** = Belirtiğiniz kişiyi Uyarır \n"
        +
        "❯ **dve!geçici-sustur** = @Kişi istediğiniz süre boyunca susturur. \n"
        +
        "❯ **dve!yazı-kanal-aç** = Yazı Kanalı Açmana Yardımcı Olur. \n"
        +
        "❯ **dve!ses-kanal-aç** = Ses Kanalı Açmana Yardımcı Olur. \n"
        +
        "❯ **dve!oto-rol-ayarla** = Discord Sunucunuza Gelen Kişilere Belirttiğiniz Rol Verir. \n"
        +
        "❯ **dve!sayaç-kanal-ayarla** = Discord'da Belirtiğin Sayı Log Atar. \n"
        +
        "❯ **dve!sayaç-ayarla** = ÖRN : dve!sayaç-ayarla 15 \n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=500333603553542175&scope=bot&permissions=393460799) | ")
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
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};
