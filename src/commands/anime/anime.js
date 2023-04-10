const { default: axios } = require('axios')
const { MessageEmbed } = require('discord.js')

const Anime = (msg) => {
    const cutUrl = msg.content.slice(7)
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${cutUrl}&limit=1`)
        .then(res => {
            const animes = res.data.results[0]
            const embed = new MessageEmbed()

            embed.setTitle(animes.title)
            .setImage(animes.image_url)
            .addField('score ⬇', animes.score, true)
            .addField('Tipo ⬇', animes.type, true)
            .addField('Sinópse ⬇', animes.synopsis)
            .setColor('#ff8c00')
            .setURL(animes.url)
            if(animes.episodes === 0){
                embed.addField('Em andamento ⬇', `${animes.episodes}`)
            }else {
                embed.addField('Episodios ⬇', `${animes.episodes}`)
            }
            if(animes.title == 'One Piece') {
                embed.setTitle('TO BE CONTINUED')
            }

            msg.channel.send(embed)

        }).catch(err => {
            console.log(err)
        })
}
module.exports = Anime