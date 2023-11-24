import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
╭ ☻ 『 *RPG Games*』
│◆ .openbo
│◆ .adventure
│◆ .bank
│◆ .atm <jumlah>
│◆ .tarik <jumlah>
│◆ .korupsi
│◆ .berburu
│◆ .berdagang *@tag*
│◆ .berkebun
│◆ .judi [jumlah]
│◆ .judipvp <type> <count> <tag>
│◆ .bonus undefined
│◆ .hitman
│◆ .casino <jumlah>
│◆ .collect
│◆ .craft
│◆ .dungeon [custom room name]
│◆ .feed [pet type]
│◆ .fighting
│◆ .gaji
│◆ .gajian
│◆ .heal
│◆ .hunt
│◆ .inventory
│◆ .inv
│◆ .kandang
│◆ .Karung
│◆ .kerja
│◆ .kolam
│◆ .maling
│◆ .mancing
│◆ .membunuh *@tag*
│◆ .merampok *@tag*
│◆ .mining
│◆ .monthly
│◆ .mulung
│◆ .nebang
│◆ .nguli
│◆ .open [crate] [count]
│◆ .pasar <jual> <args>
│◆ .petshop
│◆ .repair
│◆ .rob
│◆ .roket
│◆ .nyampah
│◆ .selectskill <type>
│◆ .buy <item> <count>
│◆ .sell <item> <count>
│◆ .taxy
│◆ .transfer <type> <count> <@tag>
│◆ .upgrade
│◆ .weekly
╰╾━━━━━━━━━━━━━━━━━━╼╯
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
        conversation: '_O p a F a n s s_'
       }
      }
    }, {})

await conn.sendMessage(m.chat, { video: {
    url: 'https://telegra.ph/file/19e41947c0a6ae28dbf62.jpg'},
    mimetype: 'video/mp4',
    fileLength: 1,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 2,
    contextInfo: {
      externalAdReply: {
      title: `OpaFanss`,
      body: ``,
      thumbnailUrl: 'https://telegra.ph/file/395e20536473665ab2c5d.jpg',
      sourceUrl: 'https://chat.whatsapp.com/GBmPMkbE6ch1EjJzz3SSN7',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  })
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
}
handler.command = /^(menurpg)$/i;

export default handler;