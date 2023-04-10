const { MessageEmbed } = require("discord.js")

const Invite = msg => {
    embed = new MessageEmbed()
    .setAuthor('Onami-bot', 'https://cdn.discordapp.com/avatars/703109351665041500/96c313c21abf0b6545aa026aa96dd017.webp?size=512')
    .setTitle('Convide Onami-bot para o seu servidor')
    .setURL('https://discord.com/oauth2/authorize?client_id=859978711574642769&permissions=8&scope=bot')
    .setColor('#ff8c00')
    msg.channel.send(embed)
}

module.exports = Invite