import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let live = `https://api.woeo.net/API/wallpaper/Video/index.php`
	conn.sendMessage(m.chat, { video: { url: live }, caption: 'wallpaper pc anime 🎶 🦊🐾 ' }, m)
}
handler.command = /^(wallpaperlive|live)$/i
handler.tags = ['animecn']
handler.help = ['wallpaperlive']

export default handler

