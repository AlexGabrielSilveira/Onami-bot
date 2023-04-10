const Volume = (msg, all_servers) => {
    const volume = msg.content.slice(8)
        
    if(isNaN(volume)) {
        return msg.reply('Valor inválido')
    }
    if(volume > 2 || volume < 0 ) {
        return msg.reply('Colque um valor entre 0 - 2')
    }

    const volume_now = all_servers[msg.guild.id].dispatcher.volume

    if(volume == null || volume == '' || volume == undefined) {
        return msg.reply(`Volume atual é 🔊 ${volume_now}`)
    }

    all_servers[msg.guild.id].volume = volume

    all_servers[msg.guild.id].dispatcher.setVolume(volume)
    msg.channel.send(`O volume foi alterado para 🔊 ${volume}`)
    
}

module.exports = Volume