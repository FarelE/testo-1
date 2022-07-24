const toMs = require("ms");
const fs = require("fs");

exports.addPlayGame = (chatId, game, jawaban, expired, msg, _db) => {
    let obi = { id: chatId, game: game, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), msg: msg }
    _db.push(obi)
}

exports.getJawabanGame = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
      if (_db[i].id == chatId) {
        found = i
      }
    })
    if (found !== false) {
      return _db[found].jawaban
    }
}

exports.isPlayGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
      if (_db[i].id == chatId) {
        status = true
      }
    })
    return status
}

exports.cekWaktuGame = (conn, _dir) => {
    setInterval(() => {
      let position = null
      Object.keys(_dir).forEach((i) => {
        if (Date.now() >= _dir[i].expired) {
          position = i
        }
      })
      if (position !== null) {
        conn.sendMessage(_dir[position].id, { text: `*--「 KUIS 」--*\n\n*Waktu Habis*\n*Jawaban :* ${_dir[position].jawaban}\n\n© Support By nekopoi.care` }, { quoted: _dir[position].msg })
        _dir.splice(position, 1)
      }
    }, 1000)
}

exports.getGamePosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
      if (_db[i].id == chatId) {
        position = i
      }
    })
    if (position !== null) {
      return position
    }
}

exports.toMs = require('ms');
exports.fs = require("fs");

// Math Game
exports.addMath = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanMath = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isMathGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuMath = (conn, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            conn.sendMessage(_dir[position].id, { text: `*--「 Math Game 」--*\n\n*Waktu Habis*\n*Jawaban :* ${_dir[position].jawaban}` }, { quoted: _dir[position].msg })
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getMathPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// Tebak Lagu
exports.addLagu = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTL= (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakLagu = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTL = (conn, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            conn.sendMessage(_dir[position].id, { text: `*--「 Tebak Lagu 」--*\n\n*Waktu Habis*\n*Jawaban :* ${_dir[position].jawaban}` }, { quoted: _dir[position].msg })
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTLPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// Kuis
exports.addKuis = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanKuis = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isKuisGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuKuis = (conn, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            conn.sendMessage(_dir[position].id, { text: `*--「 Kuis Game 」--*\n\n*Waktu Habis*\n*Jawaban :* ${_dir[position].jawaban}` }, { quoted: _dir[position].msg })
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getKuisPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// Family 100
exports.addfam = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getjawaban100 = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isfam = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuFam = (conn, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            var juwu = `*--「 Family 100 」--*\n\n*Waktu habis*\n*Jawaban yang belum terjawab :*\n\n`
            aae = _dir[position].jawaban
            for (let i of aae){
                juwu += `${i}\n`
            }
            conn.sendMessage(_dir[position].id, { text: juwu }, { quoted: _dir[position].msg })
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getfamposi = (chatId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const casinoSave = (db, obj, session) => {
    mine = db
    const dbdir = `./media/${session}.json`
    fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

exports.setCasino = (session) => {
    const dbdir = `./media/${session}.json`
    if (!fs.existsSync(dbdir)) {
        exports.objcas = {
        status: true,
        turn: 'Z',
        session: session,
        Z: null,
        Y: null,
        nominal: null
        }
    casinoSave(dbdir, objcas, session)
    return objcas
    } else {
       exports.read = JSON.parse(fs.readFileSync(dbdir))
       return read
    }
}

exports.deleteCasino = (from) => {
     fs.unlinkSync('./media/' + from + '.json')
}