/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.owner = ['6282182623238']
global.powner = ['6282182623238','6289604111770']
global.cowner = ['6282182623238','6289604111770','628990888883','6287841171672','6281545463585','6289515716659','6289530298948','6288227248988','62895379169488','6285821676621']
global.premium = ['6282182623238']
global.packname = 'RO-BOT'
global.author = 'Janji ga prot prot?🤨'
global.sessionName = 'ronove'
global.prefa = ['','!','.','🐦','🐤','#','?','🗿']
global.sp = '*ℒ⃝🐋*'
global.themeemoji = '❏'
global.rpg = {

   darahawal: 100,

   besiawal: 15,

   goldawal: 10,

   emeraldawal: 5,

   umpanawal: 5,

   potionawal: 1

}
global.linkgrupss = "https://chat.whatsapp.com/C0y1iHxWw9n8odBcK3Rs5z"
global.footxt = 'RO-BOT - By Ronove'
global.mess = {
    success: '</Success>',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    OnlyPm: 'Maaf fitur ini hanya dapat digunakan dichat pribadi',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/ronove.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4 ' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
