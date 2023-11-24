import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
await m.reply(md)
let anu = await fetch('https://image.anosu.top/pixiv/json?pixiv=1&keyword=yoimiya')
let data = await anu.json()
let foto = data.redirect[0].url
data = data.images.map((v) => `*Signature:* ${v.alert}\n*Extension:* ${v.extension}\n*ID:* ${v.pics}`)
conn.sendFile(m.chat, foto, 'anu.png', data, m)
}

handler.help = ['asuka']
handler.tags = ['anime']
handler.command = /^(ye)$/i

export default handler

