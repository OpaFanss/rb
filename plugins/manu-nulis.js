import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 'ʟ',
 'ʟᴏ',
 'ʟᴏᴀ',
 'ʟᴏᴀᴅ',
 'ʟᴏᴀᴅɪ',
 'ʟᴏᴀᴅɪɴ',
 'ʟᴏᴀᴅɪɴɢ',
 'sᴜᴄᴄᴇssғᴜʟʟ'  //ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'ᴀᴡᴀɪᴛ ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}

let pfft = `╭━━╼『 *MagerNulis & Logo* 』
┃ ☰ .logojoker <text>  🅛
┃ ☰ .logolion  🅛
┃ ☰ .logogaming 🅟
┃ ☰ .logogaming2 <text> 🅟
┃ ☰ .logoninja  🅛
┃ ☰ .nulis <teks>  🅛
┃ ☰ .nulis2 <teks>
┃ ☰ .nulis3 <teks>
┃ ☰ .logotiktok <text1|text2>  🅛
┃ ☰ .logowolf  🅛
╰━━━━━━━━╼
`;
 
await conn.sendMessage(m.chat, { video: {
    url: 'https://telegra.ph/file/efc1577fdbc46244161d3.mp4'},
    mimetype: 'video/mp4',
    fileLength: 1,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 2,
    contextInfo: {
      externalAdReply: {
      title: `RUBBY MD`,
      body: `ᴍ ᴇ n u Logo`,
      thumbnailUrl: 'https://telegra.ph/file/4fadb61d65618ee959e01.jpg',
      sourceUrl: 'https://chat.whatsapp.com/KfR7T0V9myC1tuzw74qIpS',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  })
  //conn.sendFile(m.chat, './xxx/xxx.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [1,4,8,9,18,23,17,14,12,15,7,3] }, { quoted: m })
}


handler.command = /^(menunulis)$/i;

export default handler;

