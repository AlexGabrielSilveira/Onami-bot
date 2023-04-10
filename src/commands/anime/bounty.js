const { MessageEmbed } = require("discord.js")

const Bounty = (msg) => {
    
    const bounty_name = msg.content.slice(8).toLowerCase().replace(' ', '_')
    console.log(bounty_name)            
    
    const nomes_validos = ['luffy','jinbe','sanji','zoro','god_usopp', 'nico_robin', 'franky', 'brook', 'nami', 'chopper', 'gold_roger','barba_branca', 'barba_negra', 'shanks', 'big_mom', 'kaido']
    if(bounty_name !== '' && nomes_validos.includes(bounty_name) == false) {
        return msg.reply('DIGITA DIREITO PORR@ !')
    }
    
    if(bounty_name == '') {
        embed = new MessageEmbed()  
        .setTitle('Lista de recompensas ⬇')
        .setColor('#ff8c00')
        .addField('Mugiwaras', 'Luffy, Jinbe, Sanji, Zoro, GOD USOPP, Nico robin, Franky, Brook, Nami, Chopper')
        .addField('Yonkous', 'Shanks, Kaidou, Big Mom, Marshal D. Teach | Barba negra')
        .addField('Lendas', 'Barba Branca | Edward newgate, Gol D. roger')

        msg.channel.send(embed)
    }
    
    const bountyList = {
        luffy: { img: "https://pm1.narvii.com/6975/d4a73a4bb12ca3c7d223d4741928ec8beabf6ef5r1-273-408v2_hq.jpg"},
        jinbe: { img: "https://pm1.narvii.com/6704/9aeff269cbdf43b95a5ce0b1c8decf52aa505c85_hq.jpg" },
        sanji: { img: "https://i.pinimg.com/474x/64/07/8a/64078a886592ba591bf618dd48af94cf.jpg" },
        zoro: { img: 'http://pm1.narvii.com/6231/088ea9038eb073907cfd9ba23fd7fba7b94b01d4_00.jpg' },
        god_usopp: { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzrDy1DwlmYIpln0o00UjRe_4LeKVKnsFVw&usqp=CAU' },
        nico_robin: { img: "https://pm1.narvii.com/6344/844e477dfa2d317339287f2dac58c4cf851b110b_hq.jpg" },
        franky: { img: "https://pm1.narvii.com/6344/c2e41a8798b81319bf3e83546435f6890160b693_hq.jpg" },
        brook: { img: "https://pm1.narvii.com/6669/ba0ae599f2357a833c9b99652ca4c1f5710b5faa_hq.jpg" },
        nami: { img: "https://i.pinimg.com/originals/45/14/2d/45142d03c74d1bfa619821f85dbb932c.jpg" },
        chopper: { img: "https://pbs.twimg.com/media/Edjd_mCXoAAwju-.png" },
        shanks: { img: "https://i.pinimg.com/originals/c0/3b/ac/c03bac1cfa6039107193504f7d81ba03.png" },
        big_mom: { img: "https://static.wikia.nocookie.net/onepiece/images/a/ae/Charlotte_Linlin_Wanted_Poster.png/revision/latest/scale-to-width-down/645?cb=20210201040906" },
        kaido: { img: "https://i.pinimg.com/originals/2c/e0/10/2ce010e9ea4b7f276f54862b9f60b271.jpg" },
        barba_negra: { img: "https://i.pinimg.com/474x/b7/df/99/b7df99fc5e673b69c44be893f0b819a0.jpg" },
        barba_branca: { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXdAxaLQObkh-YxAIXBl19obVFbePjSle2Q&usqp=CAU" },
        gold_roger: { img: "https://i.pinimg.com/474x/52/2b/45/522b453398ab2c258eca5b2d098c6bac.jpg" }
    
    }

    if(bounty_name) {
        embed = new MessageEmbed()
        .setTitle(`${bounty_name}`)
        .setColor('#ff8c00')
        .setImage(`${bountyList[bounty_name].img}`)

        msg.channel.send(embed)
    }
        

}
module.exports = Bounty