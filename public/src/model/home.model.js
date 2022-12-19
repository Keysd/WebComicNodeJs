const axios = require('axios');
const { JSDOM } = require('jsdom');
var url = process.env.URL;

class Model {
    static async getHomeComics(path) {
        const { data } = await axios.get(path);
        const { document } = new JSDOM(data).window;
        console.log(data);

        const comic = document.querySelectorAll('.book_avatar');
        const nominations = [];
        const latest = [];
        for (let i = 0; i < comic.length; i++) {
            const link = comic[i].querySelector('a').getAttribute('href');
            const image = comic[i].querySelector('img').getAttribute('src');
            const timeAgo = comic[i].querySelector('.time-ago').textContent.trim();
            const name = document.querySelectorAll('.book_info .book_name a')[i].textContent.trim();
            const chapter = document.querySelectorAll('.book_info .last_chapter a')[i].textContent.trim();
            const linkLastChap = document.querySelectorAll('.book_info .last_chapter a')[i].getAttribute('href');

            if (i < 10) {
                nominations.push({
                    links: link,
                    images: image,
                    timeAgos: timeAgo,
                    names: name,
                    chapters: chapter,
                    linkLastChaps: linkLastChap,
                });
            } else {
                latest.push({
                    links: link,
                    images: image,
                    timeAgos: timeAgo,
                    names: name,
                    chapters: chapter,
                    linkLastChaps: linkLastChap,
                });
            }
        }
        return { nominations: { ...nominations }, latest: { ...latest } };
    }
}

module.exports = Model;
