import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let 日本动画片 = `https://img.moehu.org/pic.php?id=kemonomimi`
	conn.sendMessage(m.chat, { image: { url: 日本动画片 }, caption: 'kemonomimi cute~~🦊🐾 ' }, m)
}
handler.command = /^(kemonomimi)$/i
handler.tags = ['animecn']
handler.help = ['kemonomimi']


export default handler

// No limit api Key //
// 没有限制 api 密钥 //