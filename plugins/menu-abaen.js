import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `ʜᴀʟᴏ ᴋᴀᴋ sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛᴢ ᴡʜᴛsᴀᴘᴘ ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ OpaFanss ᴜɴᴛᴜᴋ ᴀɴᴅᴀ ʙᴇʀɪᴋᴜᴛ ᴍᴇɴᴜ OpaFanss

┏┓┏┓┏┓┏┓┏┓
➣ᴀʟʟᴍᴇɴᴜ
┗┛┗┛┗┛┗┛┗┛
⇗⇘⇗⇘⇗⇘⇗⇘⇗
➣ᴍᴇɴᴜʟɪsᴛ
⇗⇘⇗⇘⇗⇘⇗⇘⇗
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
        conversation: '_R U B B Y M D_'
       }
      }
    }, {})

await conn.sendMessage(m.chat, { video: {
    url: 'https://telegra.ph/file/9ce7fe005d5e66d6287b5.mp4'},
    mimetype: 'video/mp4',
    fileLength: 1,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 2,
    contextInfo: {
      externalAdReply: {
      title: `RUBBY MD`,
      body: ``,
      thumbnailUrl: 'https://telegra.ph/file/4fadb61d65618ee959e01.jpg',
      sourceUrl: 'https://chat.whatsapp.com/KfR7T0V9myC1tuzw74qIpS',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  })
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu2.mp3'), quoted: m });
}
handler.command = /^(menu)$/i;

export default handler;