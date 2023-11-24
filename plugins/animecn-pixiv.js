import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
await m.reply(md)
let anu = await fetch('https://api.waifu.im/search?maid')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
conn.sendFile(m.chat, foto, 'anu.png', data, m)
}
}
handler.help = ['asuka']
handler.tags = ['anime']
handler.command = /^(asuka)$/i

export default handler
