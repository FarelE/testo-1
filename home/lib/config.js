/**
 - Create By ZackMans Official
 - Contact Me on https://wa.me/+6281385062956
 - Follow iG : @salman_alfarizi_15
*/

const fs = require("fs")
const chalk = require("chalk")

global.listbahasa = `'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'zh': 'Chinese',
'zh-cn': 'Chinese (Mandarin/China)',
'zh-tw': 'Chinese (Mandarin/Taiwan)',
'zh-yue': 'Chinese (Cantonese)',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'en-au': 'English (Australia)',
'en-uk': 'English (United Kingdom)',
'en-us': 'English (United States)',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portuguese',
'pt-br': 'Portuguese (Brazil)',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'es-es': 'Spanish (Spain)',
'es-us': 'Spanish (United States)',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'`

// Other
global.owner = ['6289604111770']
global.ownerNum = ['6289604111770@s.whatsapp.net']
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname2 = "My Sticker"
global.author = `\n\nWhatsApp Bot By Vynn's`
global.sessionName = "session"
global.ntilinks = []
global.delaySpam = 5000
global.antisp = true
global.ntispam = []
global.linkgrupss = "https://chat.whatsapp.com/BnGVGRCPKCv3P2OI8SriBH"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.emojd = ['🌏','🤪','😂','😴','🤣','🐸','😱','😝','🍟','🇲🇨']
global.mess = {
    success: 'done',
    admin: 'only for admin',
    botAdmin: 'bot is not admin',
    owner: 'only for owner',
    group: 'only for group',
    private: 'only for private message',
    bot: 'only bot',
    wait: 'Wait A Minute',
    linkm: 'Where This Link?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Unlimited",
    free: 20
    }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})