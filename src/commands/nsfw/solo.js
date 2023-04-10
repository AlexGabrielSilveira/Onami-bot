const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const Solo = async (msg) => {
    if(!msg.channel.nsfw) {
        msg.reply('esse comando funciona em canais +18')
    }else {
        const image = await nsfw.solo()
        console.log(image)
        const embed = new Discord.MessageEmbed()
            .setTitle('Baixar imagem')
            .setURL(image)
            .setColor("#ff8c00")
            .setImage(image);
            msg.channel.send(embed);
    }

}

module.exports = Solo