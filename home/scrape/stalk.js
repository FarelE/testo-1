const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

function igstn(name) {
return new Promise((resolve, reject) => {
axios.get(`https://gramhir.com/search/${name}`).then((response) => {
if(response.status === 200) {
const html = response.data
const $ = cheerio.load(html)
let newdat = []
$("#search-profile-results > div a").each(function (a,b) {
	newdat.push(
		$(b).attr("href")
)
	})
resolve(newdat)
}
})
})
}

function igstalk(stalk) {
return new Promise((resolve, reject) => {
axios.get(stalk).then((response) => {
if(response.status === 200) {
const htmli = response.data
const $ = cheerio.load(htmli)
let newdata = ''
$("div.wrapper").each(function (a,b) {
	newdata = {
		"creator": "Perwira",
		"result": {
		"topname": $(b).find("h1").text(),
		"bottomname": $(b).find("h2").text(),
		"bio": $(b).find("div.profile-description").text().trim(),
		"img": $(b).find("img").attr("src"),
		"post": $(b).find("span.black-box").text(),
		"followers": $(b).find("div.content-title > span.bold").text().trim().split("Followers")[0],
		"following": $(b).find("div.content-title > span.bold").text().trim().split("Followers")[1].split("Following")[0],
		"popularity": $(b).find("div.stat-body > div.chart_with_ir > span").text().trim().split("%")[1],
		"averagelikes": $(b).find("div.profile-statistics__block-stat").text().trim().split("\n")[0],
		"averagecomment": $(b).find("div.profile-statistics__block-stat").text().trim().split("\n")[2].trim(),
		"betweenpost": $(b).find("div.profile-statistics__block-stat").text().trim().split("\n")[4].trim(),
		"percentvideos": $(b).find("div.chart_labels__videos").text().trim().split("\n")[0],
		"percentphotos": $(b).find("div.chart_labels__photos").text().trim().split("\n")[0]
		}
}

	})
resolve(newdata)
}
})
})
}

module.exports = { igstn, igstalk }