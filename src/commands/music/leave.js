const Leave = (msg, all_servers) => {
    msg.member.voice.channel.leave()
    all_servers[msg.guild.id].connection = null
    all_servers[msg.guild.id].dispatcher = null
    all_servers[msg.guild.id].queue = []
}

module.exports = Leave