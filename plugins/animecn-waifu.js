import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let 日本动画片 = `https://moe.jitsu.top/img`
	conn.sendMessage(m.chat, { image: { url: 日本动画片 }, caption: 'waifu cute~~🦊🐾 ' }, m)
}
handler.command = /^(waifu1|外府)$/i
handler.tags = ['animecn']
handler.help = ['waifu1']


export default handler

// No limit api Key //
// 没有限制 api 密钥 //
//对于不同类的sort有不同的参数，因此分两大类来说明，sort默认为all对于第一类图片（图源不在p站），详见下表中的sort名称	类型	说明	可选值sort	string	图片的分类	all, mp, pc, 1080p, silver, furry, starry, setu, wssize	string	图片的规格	originalmw前缀(最大宽度)：4096, 3840, 2048, 1920, 1024, 960, 512, 480, 256, 240, 128,120常用：2160p, 1440p, 1080p, 720p, 480psq前缀(方形)：2048, 1024, 512, 256, 128默认为originaltype	string	返回的格式	json默认为302跳转，num大于1时强制为json num	int	返回的数量	1-100 sort	类型 all	全部图片 mp	手机壁纸 pc	桌面壁纸1080p	1920 x 1080 silver	银发 furry	兽耳（这里多有歧义，我英文取的有问题，不要在意细节）starry	星空 setu	涩图（不漏）对于第二类图片（图源在p站），详见下表中的sort 名称	类型	说明	可选值 sort	string	图片的分类	pixiv, r18, jitsu size	string	图片的规格	original, regular, small, thumb, mini 默认为regular type	string	返回的格式	json 默认为302跳转，num大于1时强制为json num	int	返回的数量	1-100 proxy	string	图片链接所使用的反代地址	i.pixiv.re 默认使用i.jitsu.top 也可以自建反代，请看文末 sort	类型 pixiv	p站图（不含18+） r18	顾名思义 jitsu	我的p站收藏（不含18+
//