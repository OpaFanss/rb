import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
╭ ☻ 『 *Anime & Manga*』
│◆ .akiyama  
│◆ .alphacoders <query>
│◆ .amv  
│◆ .ana  
│◆ .animeloli  
│◆ .animeavatar  
│◆ .avatar  
│◆ .awoo  
│◆ .boneka-chucky  
│◆ .bully  
│◆ .character <nama>
│◆ .cosplay  
│◆ .animecry  
│◆ .deidara
│◆ .fanart  
│◆ .foxgril  
│◆ .gremory  
│◆ .husbu  
│◆ .animeinfo <anime>  
│◆ .jahy 
│◆ .kaguya  
│◆ .kannaa
│◆ .kannaa
│◆ .kaguya  
│◆ .animekill  
│◆ .komiku  
│◆ .konachan 
│◆ .kusonime <judul>  
│◆ .animelink  
│◆ .loli  
│◆ .megumin
│◆ .megumin1
│◆ .animemiku  
│◆ .neko
│◆ .animeneko 
│◆ .onepiece  
│◆ .pokemon  
│◆ .akira
│◆ .akiyama
│◆ .anna
│◆ .asuna
│◆ .ayuzawa
│◆ .boruto
│◆ .chiho
│◆ .chitoge
│◆ .deidara
│◆ .erza
│◆ .elaina
│◆ .eba
│◆ .emilia
│◆ .hestia
│◆ .hinata
│◆ .inori
│◆ .isuzu
│◆ .itachi
│◆ .itori
│◆ .kaga
│◆ .kagura
│◆ .kaori
│◆ .keneki
│◆ .kotori
│◆ .kurumi
│◆ .madara
│◆ .mikasa
│◆ .miku
│◆ .minato
│◆ .naruto
│◆ .nezuko
│◆ .sagiri
│◆ .sasuke
│◆ .sakura
│◆ .cosplay
│◆ .randomanimeanime  
│◆ .randomanime
│◆ .randomanime  
│◆ .rize  
│◆ .shina  
│◆ .animeshinobu  
│◆ .shinomiya  
│◆ .shizuka  
│◆ .shota  
│◆ .simpown  
│◆ .animesmug  
│◆ .animespank  
│◆ .spank  
│◆ .storyanime  
│◆ .tejina  
│◆ .toukachan  
│◆ .trap  
│◆ .tsunade  
│◆ .waifu  
│◆ .whatanime  
│◆ .yotsuba  
│◆ .yuki  
│◆ .yumeko  
│◆ .mangasearch  
╰╾━━━━━━━━━━━━━━━━━━╼╯
`;
 let neko = await conn.sendMessage(m.chat, {text: '《■■□□□□□□□□》5%'})
 
 await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■□□□□□□□□》30%'
       }
      }
    }, {})
 await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■□□□□□□□□》50%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■□□□□□□□□》60%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■■■■□□□□□》 75%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■■■■■■■□》95%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■■■■■■■■》100%'
       }
      }
    }, {})
      await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '_O p a F a n s s_'
       }
      }
    }, {})

await conn.sendMessage(m.chat, { video: {
    url: 'https://telegra.ph/file/19e41947c0a6ae28dbf62.jpg'},
    mimetype: 'video/mp4',
    fileLength: 1,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 2,
    contextInfo: {
      externalAdReply: {
      title: `OpaFanss`,
      body: ``,
      thumbnailUrl: 'https://telegra.ph/file/395e20536473665ab2c5d.jpg',
      sourceUrl: 'https://chat.whatsapp.com/GBmPMkbE6ch1EjJzz3SSN7',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  })
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
}
handler.command = /^(menuanime)$/i;

export default handler;