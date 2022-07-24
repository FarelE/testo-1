  const fs = require('fs')
  let _hasilBuruan = JSON.parse(fs.readFileSync('./rpg/user/hasil_buruan.json'))
  
  const addInventoriBuruan = (sender) => {
        const obj = {id: sender, ikan: 0, ayam: 0, kelinci: 0, domba: 0, sapi: 0, gajah: 0}
         _hasilBuruan.push(obj)
        fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
   }
  const cekDuluHasilBuruanNya = (sender) => {
            let status = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
const addNaga = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].naga += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
        const kurangNaga = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].naga -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getNaga = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].naga
            }
        }    
   const addAyam = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangAyam = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getAyam = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ayam
            }
        }    
  const addIkan = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangIkan = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getIkan = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ikan
            }
        }      
  const addKelinci = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangKelinci = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getKelinci = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].kelinci
            }
        }     
  const addDomba = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangDomba = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getDomba = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].domba
            }
        } 
    const addSapi = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangSapi = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getSapi = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].sapi
            }
        }     
  const addGajah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangGajah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getGajah = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].gajah
            }
        }     
const addTupai = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Tupai += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
        const kurangTupai = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Tupai -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getTupai = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].Tupai
            }
        } 
const addKaori = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Kaori += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
        const kurangKaori = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Kaori -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getKaori = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].Kaori
            }
        }  
const addKucing = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Kucing += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
        const kurangKucing = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Kucing -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getKucing = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].Kucing
            }
        }  
const addRubah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Rubah += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
        const kurangRubah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Rubah -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getRubah = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].Rubah
            }
        }           
 const addUlar = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Ular += amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
        const kurangUlar = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].Ular -= amount
                fs.writeFileSync('./rpg/user/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getUlar = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].Ular
            }
        }                   
    module.exports = { 
    	             cekDuluHasilBuruanNya,
                     addInventoriBuruan, 
                     addIkan,
                     addAyam, 
                     addKelinci, 
                     addDomba, 
                     addSapi,
                     addGajah,
                     addNaga,
                     addTupai,
                     addKaori,
                     addUlar,
                     addRubah,
                     addKucing,
                     kurangIkan,
                     kurangNaga,
                     kurangAyam, 
                     kurangKelinci, 
                     kurangDomba, 
                     kurangSapi,
                     kurangGajah,
                     kurangTupai,
                     kurangKaori,
                     kurangUlar,
                     kurangRubah,
                     kurangKucing,
                     getIkan,
                     getAyam, 
                     getNaga,
                     getKelinci, 
                     getDomba,
                     getSapi,
                     getGajah,
                     getTupai,
                     getKaori,
                     getUlar,
                     getRubah,
                     getKucing             
                  }
  
