let namaninja = async(q, mek, reply, m) =>{
let njing = q ? q : m.pushName
reply(njing.replace(/[a-z]/gi, v => { return { 'a': 'ka', 'b': 'tu', 'c': 'mi', 'd': 'te', 'e': 'ku', 'f': 'lu', 'g': 'ji', 'h': 'ri', 'i': 'ki', 'j': 'zu', 'k': 'me', 'l': 'ta', 'm': 'rin', 'n': 'to', 'o': 'mo', 'p': 'no', 'q': 'ke', 'r': 'shi', 's': 'ari', 't': 'ci', 'u': 'do', 'v': 'ru', 'w': 'mei', 'x': 'na', 'y': 'fu', 'z': 'zi' }[v.toLowerCase()] || v }))
}

module.exports = namaninja