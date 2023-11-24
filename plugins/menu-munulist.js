import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
  ┏━━━━━━━━
  ┃ ᴍ ᴇ ɴ ᴜ ʟ ɪ ᴛs
  ┗━━━━━━━━
  ┏━━━━━━━━━━
  ┃〣menimain
  ┃〣menugame
  ┃〣menurpg
  ┃〣menuxp
  ┃〣menusticker
  ┃〣menukerang
  ┃〣menuquotes
  ┃〣menufun
  ┃〣menuanime
  ┃〣menuadminry
  ┃〣menugroup
  ┃〣menustore
  ┃〣menuvote
  ┃〣menuabsen
  ┃〣menupremium
  ┃〣menunsfw
  ┃〣menuanonymous
  ┃〣menuinternet
  ┃〣menugenshin
  ┃〣menunews
  ┃〣menudownloader
  ┃〣menusearch
  ┃〣menutools
  ┃〣menuprimbon
  ┃〣menunulis
  ┃〣menuaudio
  ┃〣menumaker
  ┃〣menudatabase
  ┃〣menuquran
  ┃〣menuowner
  ┃〣menuinfo
  ┃〣menurandom
  ┃〣menusound
  ┃〣menujadibot
  ┃〣menubokep
  ┃〣menupanel
  ┗━━━━━━━━━━━━
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
handler.command = /^(menulist)$/i;

export default handler;