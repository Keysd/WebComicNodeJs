const axios = require('axios');
const { JSDOM } = require('jsdom');
var url = process.env.URL;

class Model {
    static async getPageComics(path) {
        const { data } = await axios.get(path);
        const { document } = new JSDOM(data).window;

        const comic = document.querySelectorAll('.book_avatar');
        const pageComic = [];
        for (let i = 0; i < comic.length; i++) {
            const link = comic[i].querySelector('a').getAttribute('href');
            const image = comic[i].querySelector('img').getAttribute('src');
            const timeAgo = comic[i].querySelector('.time-ago').textContent.trim();
            const name = document.querySelectorAll('.book_info .book_name a')[i].textContent.trim();
            const chapter = document.querySelectorAll('.book_info .last_chapter a')[i].textContent.trim();
            const linkLastChap = document.querySelectorAll('.book_info .last_chapter a')[i].getAttribute('href');
            pageComic.push({
                links: link,
                images: image,
                timeAgos: timeAgo,
                names: name,
                chapters: chapter,
                linkLastChaps: linkLastChap,
            });
        }

        const page = [];
        const btnPage = document.querySelectorAll('.page_redirect a');
        for (let i = 0; i < btnPage.length; i++) {
            page.push({
                btnLink: btnPage[i].getAttribute('href'),
                btnName: btnPage[i].querySelector('p').textContent.trim(),
            });
        }

        return { btnPages: { ...page }, lstcomic: { ...pageComic } };
    }
}

module.exports = Model;
