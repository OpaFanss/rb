import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, { match, usedPrefix, command }) {
        let pp = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=%20apakah%20benar%20?`
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		let name = await conn.getName(who)
		let caption = `👋 Hallo @${who.split("@")[0]},\n\nApakah Kamu mencari *${usedPrefix + mean}* ?\n\nHasil Kemiripan ➲ *${parseInt(som)}%*\n\nS C B Y K E E N Z O F C I A L`
	if (mean) this.sendFile(m.chat, pp, null, caption, m, { mentions: this.parseMention(caption) })
	}
}
export const enable = true