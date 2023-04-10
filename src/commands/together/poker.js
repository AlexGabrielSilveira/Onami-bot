const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');
const { default: axios } = require('axios');
const { MessageEmbed } = require("discord.js")


client.discordTogether = new DiscordTogether(client);

const Poker = (msg) => {
    if(msg.member.voice.channel) {
        axios.post(`https://discord.com/api/v8/channels/${msg.member.voice.channel.id}/invites`, {
            max_age: 86400,
            max_uses: 0,
            target_application_id: '755827207812677713',
            target_type: 2,
            temporary: false,
            validate: null
        }, 
        {
            headers: {
                'Authorization': `Bot ${msg.client.token}`,
                'Content-Type': 'application/json'
            }
        }).then(invite => {
            embed = new MessageEmbed()
            .setAuthor('Onami Bot','https://cdn.discordapp.com/avatars/859978711574642769/efb86798a61db1e9ada2820dfcddb47f.webp?size=512')
            .setColor('#ff8c00')
            .setTitle('Clique nesta mensagem para jogar Poker')
            .setURL(`https://discord.com/invite/${invite.data.code}`)

            msg.channel.send(embed)
        })
    }else {
        msg.reply('entre em um canal de voz primeiro')
    }
}

module.exports = Poker
