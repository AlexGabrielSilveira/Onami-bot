const { MessageEmbed } = require("discord.js")

const Queue = (msg, all_servers) => {
    const queue = all_servers[msg.guild.id].queue
    
    const embed = new MessageEmbed()
    .setAuthor('Lista de músicas 🎶', 'https://cdn.discordapp.com/avatars/859978711574642769/96c313c21abf0b6545aa026aa96dd017.webp?size=512')
    .setColor('#ff8c00')
    for(i in queue) {
        embed.addField(`${parseInt(i) + 1} - ${queue[i].title}`, ` ${queue[i].url}`)
    }

    msg.channel.send(embed)
}

module.exports = Queue