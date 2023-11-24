import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let res = await fetch(`https://api.ibeng.tech/api/anime/nekopoi?apikey=7g9O4mCJ26`)
	let anu = await res.json()
	const bkp = conn.sendFile(m.chat, anu.data, 'wikwik.mp4', '_Jangan Coli Ya..._', m)
} 
handler.command = /^(bkp3)$/i
handler.tags = ['bokep']
handler.help = ['bkp3']
handler.premium = true
export default handler