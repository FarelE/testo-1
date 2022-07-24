/**
  * Create By ZackMans Official
  * Contact Me on https://wa.me/+6281385062956
  * Follow iG : @salman_alfarizi_15
*/
require("./config.js")

class antiSpam {
constructor(...args) {

// Detect Cmd
this.isFilter = function (from, cmds) {
const isFrom = ntispam.find(v => v.jid.includes(from))
if (isFrom) {
const cekFrom = ntispam.find(v => v.jid == from)
const cekCmd = cekFrom.cmd
return cekCmd.includes(cmds)
}
}

// Add Delay Cmd
this.addFilter = function (from, cmds) {
const isFrom = ntispam.find(v => v.jid.includes(from))
if (isFrom) {
const cekFrom = ntispam.find(v => v.jid == from)
const cekCmd = cekFrom.cmd
if (!cekCmd.includes(cmds)) {
cekFrom.cmd.push(cmds)
setTimeout(() => {
var off = cekCmd.indexOf(cmds)
cekCmd.splice(off, 1)
}, delaySpam)
}
} else {
ntispam.push({jid:from, cmd:[cmds]})
const cekF = ntispam.find(v => v.jid == from)
const cekFrom = cekF.cmd
setTimeout(() => {
var off = cekFrom.indexOf(cmds)
cekFrom.splice(off, 1)
}, delaySpam)
}
}

}
}

module.exports = antiSpam;