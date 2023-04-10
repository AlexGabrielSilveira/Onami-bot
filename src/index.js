//webserver
require('./webserver')
//music commands
const Volume = require('./commands/music/volume')
const Skip = require('./commands/music/skip')
const Leave = require('./commands/music/leave')
const Pause = require('./commands/music/pause')
const Resume = require('./commands/music/resume')
const Play = require('./commands/music/play')
const Queue = require('./commands/music/queue')

//anime
const Anime = require('./commands/anime/anime')
const Character = require('./commands/anime/character')
const Bounty = require('./commands/anime/bounty')

//misc
const Youtube = require('./commands/together/youtube')
const Poker = require('./commands/together/poker')
const Invite = require('./commands/invite/invite')

//lol
const Opgg = require('./commands/lol/opgg')

//nsfw
const Wallpaper = require('./commands/nsfw/wallpaper')
const Hentai = require('./commands/nsfw/hentai')
const Solo = require('./commands/nsfw/solo')

//help
const Help = require('./commands/help')

const { Client } = require('discord.js')
const configs = require('./config.json')
const fs = require('fs')
const client = new Client()

const prefix = configs.PREFIX

const all_servers = []

client.on('ready', () => {
    client.user.setActivity('Nami 🧡🍊| .help')
    console.log('estou online')
    loadServers()
})

client.on('guildCreate', (guild) => {
    
    all_servers[guild.id] = {
        connection: null,
        dispatcher: null,
        queue: [],
        playing_now: false,
        volume: 0.8
    }
    saveServer(guild.id)
})
client.on('message', async (msg) => {
    
    //filtros
    if(!msg.content.startsWith(prefix)) return
    if(!msg.guild) return
    if(msg.author.bot == true) return

    // comandos
    if(msg.content.startsWith(prefix + 'queue') || msg.content.startsWith(prefix + 'q')) Queue(msg, all_servers)
    if(msg.content.startsWith(prefix + 'nsfw') || msg.content.startsWith(prefix + 'n') )  Solo(msg)
    if(msg.content.startsWith(prefix + 'wallpaper') || msg.content.startsWith(prefix + 'w'))  Wallpaper(msg)
    if(msg.content.startsWith(prefix + 'hentai') || msg.content.startsWith(prefix + 'h')) Hentai(msg)
    if(msg.content.startsWith(prefix + 'invite')) Invite(msg)
    if(msg.content.startsWith(prefix + 'poker')) Poker(msg)
    if(msg.content.startsWith(prefix + 'youtube')) Youtube(msg)
    if(msg.content.startsWith(prefix + 'bounty')) Bounty(msg)
    if(msg.content.startsWith(prefix + 'opgg')) Opgg(msg)
    if(msg.content.startsWith(prefix + 'char')) Character(msg)
    if(msg.content.startsWith(prefix + 'anime')) Anime(msg)
    if(msg.content.startsWith(prefix + 'play') || msg.content === 'p') Play(msg, all_servers)
    if(msg.content.startsWith(prefix + 'volume') || msg.content.startsWith(prefix + 'v')) Volume(msg, all_servers)
    if(msg.content === prefix + 'skip') Skip(msg, all_servers)
    if(msg.content === prefix + 'leave') Leave(msg, all_servers)
    if(msg.content === prefix + 'pause') Pause(msg, all_servers)
    if(msg.content === prefix + 'resume') Resume(msg, all_servers)
    if(msg.content === prefix + 'help') Help(msg)
})
const loadServers = () => {
    
    fs.readFile('serverList.json', 'utf8', (err, data) => {
        if(err) { 
            console.log(err) 
        }
        else{
            const objRead = JSON.parse(data)
            for (let i in objRead.servers) {
                all_servers[objRead.servers[i]] = {
                    connection: null,
                    dispatcher: null,
                    queue: [],
                    playing_now: false,
                    volume: 0.8
                }
            }
        }
    })
}
const saveServer = (newGuild) => {
    fs.readFile('serverList.json', 'utf8', (err, data) => {
        if(err) { 
            console.log(err) 
        }
        else{
            const objRead = JSON.parse(data)
            objRead.servers.push(newGuild)
            const objPush = JSON.stringify(objRead)
    
            fs.writeFile('serverList.json', objPush, 'utf8', (err) => {
                console.log(err)
            })
        }
    })
}

client.login(configs.TOKEN_DISCORD)