const { MessageEmbed } = require("discord.js")

const Help = (msg) => {
    embed = new MessageEmbed()
    .setTitle('Comandos do Onami BOT')
    .setColor('#ff8c00')
    .addField('Prefixo ⬇', '**.** ( ponto )')
    .addField('Misc ⬇', ' youtube, poker, invite')
    .addField('nsfw 🔞 ⬇', ' hentai (h), wallpaper (w), nsfw (n)')
    .addField('Anime ⬇', 'anime, char, bounty')
    .addField('LoL ⬇', 'opgg')
    .addField('Música ⬇', 'play (p), leave, pause, resume, skip, volume (v), queue (q)')

    msg.channel.send(embed)
}
module.exports = Help