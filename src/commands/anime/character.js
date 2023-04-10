const { default: axios } = require('axios')
const { MessageEmbed } = require('discord.js')

const Character = (msg) => {

    const cutChar = msg.content.slice(6)
    axios.get(`https://api.jikan.moe/v3/search/character?q=${cutChar}`)
    .then(res => {
        const char = res.data.results[0]

        const charAnimes = char.anime.slice(0,5)

        const embed = new MessageEmbed()
        .setTitle(char.name)
        .setURL(char.url)
        .setColor('#ff8c00')
        .setImage(char.image_url)
        .addField('Relacionados ⬇', charAnimes.map(char => `[${char.name}](${char.url})`))

        msg.channel.send(embed)
        
    }).catch(err => {
        if(err.message == 'Request failed with status code 404') {
            return msg.reply('Personagem não encontrado')
        }
        console.log(err)
    })
}

module.exports = Character