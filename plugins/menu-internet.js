import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
╭ ☻ 『 *Internet*』
│◆ .alphacoders <query>
│◆ .onepiece  
│◆ .ppcp2
│◆ .ppcouplev2  
│◆ .ppcpv2  
│◆ .google <query>  
│◆ .brainly <query>
│◆ .cecan  
│◆ .cerpen  
│◆ .cogan  
│◆ .covid <negara>  
│◆ .darkjoke  
│◆ .fetch <url>
│◆ .get <url>
│◆ .gimage <query>  
│◆ .happymod <query>
│◆ .infogempa  
│◆ .jadwalbola
│◆ .jarak <place> - <place>
│◆ .kbbi <teks>
│◆ .kuncigitar
│◆ .lk21 <judul>
│◆ .meme  
│◆ .modeldif
│◆ .playstore  
│◆ .ppcouple  
│◆ .ppcp  
│◆ .roboguru <grade>|<subject>|<query>
│◆ .spesifikasi
│◆ .ssweb  
│◆ .tahugasih  
│◆ .turnbackhoax
│◆ .wallpaper <query>
│◆ .wikipedia <query>
│◆ .xnxxsearch 
│◆ .lk21search 
│◆ .lirik <Apa>
│◆ .ytcomment <comment>  
│◆ .monitor
│◆ .ppcp
│◆ .renungan
│◆ .stalktelegram 
│◆ .animedif
│◆ .ocr <text>
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
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu2.mp3'), quoted: m });
}
handler.command = /^(menuinternet)$/i;

export default handler;