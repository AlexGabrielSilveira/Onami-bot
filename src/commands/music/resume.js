const Resume = (msg, all_servers) => {
    all_servers[msg.guild.id].dispatcher.resume()
    msg.channel.send('Música resumida')
}

module.exports = Resume