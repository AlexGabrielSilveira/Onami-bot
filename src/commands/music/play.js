const yts = require('yt-search')
const { MessageEmbed } = require('discord.js')
const ytdl = require('ytdl-core')

const Play = async (msg, all_servers) => {
    if(msg.member.voice.channel) {
        all_servers[msg.guild.id].connection = await msg.member.voice.channel.join()
    }else {
        msg.reply('Entre em um canal de voz primeiro')
    }
    let playing = msg.content.slice(6)

    if(playing.length === 0) {
        msg.reply('Digite algo por favor')
        return
    }
    const music = await yts(msg.content)
    const embed = new MessageEmbed()
    
    const ResultList = []

    for(let i in music.videos) {
            const getItens = {
                'title': music.videos[i].title,
                'views': music.videos[i].views,
                'url': music.videos[i].url
            }

            ResultList.push(getItens)           
        }

        embed.setAuthor('Resultado da pesquisa')
            .setDescription('escolha sua música 1-3')
            .setColor('#ff8c00')

        const limitedList = ResultList.slice(0,3)

        for(let i in limitedList) {
            embed.addField(`${parseInt(i) + 1}- ${limitedList[i].title}`, `Visualizações: ${limitedList[i].views}`)
        }

        msg.channel.send(embed).then( (embedMessage) => {
            const reactions = ['1️⃣','2️⃣','3️⃣']
            
            for(let i in reactions) {
                embedMessage.react(reactions[i])
            }
            const filter = (reaction, user) => {
                return reactions.includes(reaction.emoji.name) && user.id === msg.author.id
            }
            embedMessage.awaitReactions(filter, { max: 1, time: 10000, errors:['time'] })
            .then((collected) => {
                const react = collected.first()
                const chooseOption = reactions.indexOf(react.emoji.name)

                all_servers[msg.guild.id].queue.push({
                    url: ResultList[chooseOption].url,
                    title: ResultList[chooseOption].title
                })
                msg.channel.send(`Você escolheu ${ResultList[chooseOption].title}.`)
                playMusics()
            }).catch((error) => {
                console.log(error)
                msg.reply('Escolha uma opção valída.')
            })
        }) 
        const playMusics = () => {
    
            if(all_servers[msg.guild.id].playing_now === false) {

                const play_now = all_servers[msg.guild.id].queue[0].url
                all_servers[msg.guild.id].playing_now = true
                all_servers[msg.guild.id].dispatcher = all_servers[msg.guild.id].connection.play(ytdl(play_now))
                all_servers[msg.guild.id].dispatcher.setVolume(all_servers[msg.guild.id].volume)


                all_servers[msg.guild.id].dispatcher.on('finish', () => {
                    all_servers[msg.guild.id].queue.shift()
                    all_servers[msg.guild.id].playing_now = false
                    if(all_servers[msg.guild.id].queue.length > 0) {
                        playMusics()
                    }else {
                        msg.member.voice.channel.leave()
                        all_servers[msg.guild.id].dispatcher = null
                    }
                })
    
            }
    
        }
    }

module.exports = Play