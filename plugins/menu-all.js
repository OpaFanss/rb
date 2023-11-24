import fs from 'fs'

let handler = async (m, { conn }) => {
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

let pfft = `ʜᴀʟᴏ ᴋᴀᴋ sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛᴢ ᴡʜᴛsᴀᴘᴘ ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ ᴏᴘᴀ ᴜɴᴛᴜʟ ᴀɴᴅᴀ ʙᴇʀɪᴋᴜᴛ ᴍᴇɴᴜ\nOpaFanss

┏┓┏┓┏┓┏┓┏┓
➣ᴀʟʟᴍᴇɴᴜ
┗┛┗┛┗┛┗┛┗┛
⇗⇘⇗⇘⇗⇘⇗⇘⇗
➣ᴍᴇɴᴜʟɪsᴛ
⇗⇘⇗⇘⇗⇘⇗⇘⇗
`;
 
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
      body: `ᴍ ᴇ ɴ ᴜ  ᴍ ᴀ ɪ ɴ`,
      thumbnailUrl: 'https://telegra.ph/file/395e20536473665ab2c5d.jpg',
      sourceUrl: 'https://chat.whatsapp.com/GBmPMkbE6ch1EjJzz3SSN7',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  })
  //conn.sendFile(m.chat, './xxx/xxx.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [1,4,8,9,18,23,17,14,12,15,7,3] }, { quoted: m })
}


handler.command = /^(menu)$/i;

export default handler;