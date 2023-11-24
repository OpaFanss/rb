import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let 日本动画片 = `https://img.moehu.org/pic.php?id=xjj`
	conn.sendMessage(m.chat, { image: { url: 日本动画片 }, caption: 'xjj cute~~🦊🐾 ' }, m)
}
handler.command = /^(xjj)$/i
handler.tags = ['animecn']
handler.help = ['xjj']


export default handler

// No limit api Key //
// 没有限制 api 密钥 //