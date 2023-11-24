import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
╭ ☻ 『 *Maker*』
│◆ .lolice
│◆ .avengers  
│◆ .blackpink  
│◆ .bonk  
│◆ .carbon  
│◆ .donaldtrumptweet  
│◆ .dttweet  
│◆ .freefire  
│◆ .glass  
│◆ .googlesugest  
│◆ .gravity  
│◆ .gta  
│◆ .logohacker  
│◆ .harrypotter  
│◆ .hornycard  
│◆ .hornylicense  
│◆ .ice  
│◆ .memaker
│◆ .itssostupid  
│◆ .kitmeme
│◆ .ktp 
│◆ .lolice
│◆ .newyear  
│◆ .pornhub <text1>|<teks2>  
│◆ .simpcard  
│◆ .space  
│◆ .thunder  
│◆ .tahta <teks>  
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
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu3.mp3'), quoted: m });
}
handler.command = /^(menumaker)$/i;

export default handler;