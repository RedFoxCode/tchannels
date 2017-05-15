const cheerio = require("cheerio");
const request = require("request");

const BASE_URL = "https://tchannels.me";

const TChannels = {
	getFromPage: function(path) {
		return new Promise(function(resolve, reject) {
			request.get(BASE_URL + path, function(err, res, body) {
				const $ = cheerio.load(body);

				const blocks = $(".info");
				const addtos = $(".addto");

				resolve(blocks.map(function(i, block) {
					const _addto = addtos[i];

					const name = $(block.children[1]).text();
					const description = block.children[5].children[0].data.trim();
					const link = _addto.attribs.href;

					return {
						name: name,
						description: description,
						link: link
					}
				}).get());
			});
		});
	},
	getTop: function() {
		return this.getFromPage("/");
	},
	search: function(query) {
		return this.getFromPage("/search?text=" + encodeURIComponent(query));
	}
}

module.exports = TChannels;