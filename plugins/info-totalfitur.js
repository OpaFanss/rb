import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let txt = `*𝚝𝚘𝚝𝚊𝚕 𝚏𝚒𝚝𝚞𝚛 𝚛𝚞𝚋𝚋𝚢 𝚖𝚍*\n\n`
      txt += `	◦  *𝚁𝚄𝙱𝙱𝚈 𝚃𝚘𝚝𝚊𝚕 𝙵𝙸𝚃𝚄𝚁* : ${totalf}\n`
      txt += author
   await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: totalf * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: txt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(feature|totalfitur)$/i
export default handler