/**
  * Create By ZackMans Official
  * Contact Me on https://wa.me/+6281385062956
  * Follow iG : @salman_alfarizj_15
*/

const fs = require('fs')
const cemde = JSON.parse(fs.readFileSync('./worker/src/totalcmd.json'))
const totl = cemde[0].cmd

async function addCmd() {
cemde[0].total += 1
fs.writeFileSync('./worker/src/totalcmd.json', JSON.stringify(cemde))
}

async function addCmds(wktud, named) {
try {
let cekName = totl.find(i => i.name.includes(named))
if (cekName) {
let dedf = totl.find(i => i.name == named)
var chn = totl.indexOf(dedf)
totl[chn].use += 1;
totl[chn].waktu = wktud;
} else {
totl.push({ name:named, use: 1,  waktu: wktud})
}
} catch(err) {
throw String(err)
}
}

module.exports = {
	addCmd,
	addCmds
}