const axios_1 = require('axios')
const cheerio_1 = require('cheerio')

async function RandomCerpen() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const link = yield axios_1.default.get(`http://cerpenmu.com/`);
            if (link.status !== 200)
                return;
            const $ = cheerio_1.default.load(link.data);
            const link_input = [];
            $('#sidebar > div:nth-child(9) > ul').each(function (_a, b) {
                $(b).find('li').each(function (_tyu, zu) {
                    const url = $(zu).find('a').attr('href');
                    link_input.push(url);
                });
            });
            const random = link_input[Math.floor(Math.random() * (link_input.length))];
            const Url = yield axios_1.default.get(random);
            if (Url.status !== 200)
                resolve({ status: Url.status, mess: "ERROR" });
            const ch = cheerio_1.default.load(Url.data);
            const Data = [];
            ch('#content > article').each(function (_hm, to) {
                ch(to).find('article').each(function (_chu, chuwi) {
                    const Url = ch(chuwi).find('h2 > a').attr('href');
                    Data.push(Url);
                });
            });
            const acak = Data[Math.floor(Math.random() * (Data.length))];
            yield axios_1.default.get(acak).then(respon => {
                if (respon.status !== 200)
                    return;
                const $ = cheerio_1.default.load(respon.data);
                const judul = $('#content').find('article > h1').text().trim();
                const kategori = $('#content').find('article > a:nth-child(4)').text().trim();
                const cerita = $('#content').find('article').text().trim();
                const res = {
                    status: respon.status,
                    author: "I`am RA",
                    data: {
                        judul: judul,
                        kategori: kategori,
                        cerita: cerita
                    }
                };
                resolve(res);
            }).catch(reject);
        }));
    });
}
module.exports = { RandomCerpen }
