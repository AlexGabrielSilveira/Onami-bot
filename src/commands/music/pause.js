const Pause = (msg, all_servers) => {
    all_servers[msg.guild.id].dispatcher.pause()
    msg.channel.send('Música pausada')
}

module.exports = Pause