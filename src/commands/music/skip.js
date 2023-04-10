const Skip = (msg ,all_servers) => {
    all_servers[msg.guild.id].dispatcher.end()
    msg.channel.send('Música pulada.')
}

module.exports = Skip