var request = require('request');
var cheerio = require('cheerio');

var pattern = /(.*?)\/(i|j)(\/[^\.]+)(\.[\w\d-_;]+)?\.(jpg|jpeg|gif|png)$/i;

function getOrigAimsUrl(url) {
	var match = url.match(pattern);
	return match[1] + "/i" + match[3] + "." + match[5];
}

request('http://www.nbcnews.com', function(e, r, body) {
	var $ = cheerio.load(body);

	var imgs = $('img[src*="s-nbcnews.com/j/MSNBC/Components"]');

	var srcs = imgs.map(function(i,img) {
		var src = $(img).attr('src');
		return getOrigAimsUrl(src);
	});

	var json = JSON.stringify({images: srcs}, null, 2);

	console.log(json);
});