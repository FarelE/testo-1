const uploadImage = require('../lib/uploadImage')

let smeme = async(mek, ronove, sendFile, q, global) =>{
let [atas, bawah] = q.split`|`
let q1 = mek.quoted ? mek.quoted : mek
let mime = (q1.msg || q1).mimetype || '' 
if (!mime)return mek.reply(`balas gambar dengan perintah\n\n!smeme <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`)

if (!/image\/(jpe?g|png)/.test(mime))return mek.reply(`_*Mime ${mime} tidak didukung!*_`)
let img = await q1.download() 
let url = await uploadImage(img) 
let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
try { 
await ronove.sendImageAsSticker(mek.chat, meme, mek, { packname: global.packname, author: global.author })
} catch (e) { 
reply('gagal membuat stiker, Mencoba Mengirim gambar') 
await sendFile(mek.chat, meme,'Nih', mek)
}
}

module.exports = smeme



