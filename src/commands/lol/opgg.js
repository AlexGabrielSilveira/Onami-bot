const { MessageEmbed } = require("discord.js")
const opggScrape = require('opgg-scrape');

const Opgg = msg => {
    const nickname = msg.content.slice(6) 
    opggScrape.getStats(`${nickname}`, {region: 'br', refresh: false}).then(stats => {
            const embed = new MessageEmbed()
            .setTitle(stats.name)
            .addField('Nível ⬇', stats.level)
            .addField('Elo ⬇', stats.rank)
            .addField('Pontos ⬇', stats.rankedLP)
            .addField('KDA Ratio ⬇', stats.KDARatio)
            .addField('Kills 🔫', stats.KDA.kills, true)
            .addField('Death ☠', stats.KDA.deaths, true)
            .addField('Assistis ✌', stats.KDA.assists, true)
            .setThumbnail(stats.avatarURL)
            .setColor('#ff8c00')
    
            msg.channel.send(embed)
        }).catch(err => {   
            console.log('Aqui está o erro -> ' + err)
        })
}

module.exports = Opgg