import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
╭ ☻ 『 *Tools*』
│◆ .morse <encode|decode>
│◆ .teruskan <teks>
│◆ .monitor
│◆ .repeat <teks>  
│◆ .ping
│◆ .speed
│◆ .emojimix <1>|<2>
│◆ .base64
│◆ .buildhsr  
│◆ .calc <expression>
│◆ .wait (caption|reply image)
│◆ .lolapikey
│◆ .cekresolution <reply | caption>
│◆ .changebg 
│◆ .differentme  
│◆ .gcwa <query>  
│◆ .getcaption
│◆ .getexif
│◆ .getprofile [@users]  
│◆ .halah <teks>
│◆ .hilih <teks>
│◆ .huluh <teks>
│◆ .heleh <teks>
│◆ .holoh <teks>
│◆ .stalkig
│◆ .jadwaltv
│◆ .kodepos <query>  
│◆ .mention <teks>
│◆ .micro <lang> <teks>  
│◆ .modapk
│◆ .npmsearch
│◆ .pesankosong  
│◆ .prompt  
│◆ .qr <teks>
│◆ .qrcode <teks>
│◆ .react <emoji>
│◆ .readmore <teks>|<teks>
│◆ .spoiler <teks>|<teks>
│◆ .readqr  
│◆ .readvo
│◆ .remini 
│◆ .removebg 
│◆ .resize <width> <height>
│◆ .spamwa <number>|<mesage>|<no of messages>  
│◆ .stabledif
│◆ .wastalk 
│◆ .stalkff  
│◆ .stalkml  
│◆ .tiktokstalk
│◆ .setchattime <tanggal|jam|text>
│◆ .toaksara <teks>
│◆ .tourl (reply media)
│◆ .translate  
│◆ .truecaller <number>  
│◆ .unblur  
│◆ .upscale 
│◆ .vn <lang> <teks>  
│◆ .weather
│◆ .cekaxis <auth>
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
handler.command = /^(menutools)$/i;

export default handler;