const axios = require('axios');
const { JSDOM } = require('jsdom');

class Model {
    static async getChaptersComic(path) {
        const { data } = await axios.get(path);
        const { document } = new JSDOM(data).window;

        const info = document.querySelectorAll('.book_info .row');
        const avt = document.querySelector('.book_avatar img').getAttribute('src');
        const name = document.querySelector('.book_other h1').textContent.trim();
        const author = info[0].querySelector('.col-xs-9').textContent.trim();
        const status = info[1].querySelector('.col-xs-9').textContent.trim();
        const numLike = info[2].querySelector('.col-xs-9').textContent.trim();
        const numFollow = info[3].querySelector('.col-xs-9').textContent.trim();
        const numView = info[4].querySelector('.col-xs-9').textContent.trim();
        const linkFirstly = document.querySelector('.story-detail-menu a').getAttribute('href');

        const introduce = '...';

        try {
            introduce = document.querySelector('.story-detail-info.detail-content p').textContent.trim();
        } catch (error) {}
        // const

        const chapter = document.querySelectorAll('.works-chapter-item');
        const list = [];
        for (let i = 0; i < chapter.length; i++) {
            const nameChapter = chapter[i].querySelector('.name-chap a').textContent.trim();
            const dateChapter = chapter[i].querySelector('.time-chap').textContent.trim();
            const link = chapter[i].querySelector('a').getAttribute('href');

            list.push({ nameChapters: nameChapter, dateChapters: dateChapter, linkChapters: link });
        }

        return { avt, name, author, status, numLike, numFollow, numView, linkFirstly, introduce, chapters: { ...list } };
    }
    static async getImagesComic(path) {
        const { data } = await axios.get(path);
        const { document } = new JSDOM(data).window;

        const wrapPage = document.querySelectorAll('#path li a');
        const comicName = {
            link: wrapPage[1].getAttribute('href'),
            name: wrapPage[1].querySelector('span').textContent.trim(),
        };
        const chap = wrapPage[2].querySelector('span').textContent.trim().replace('Chương ', '');

        const list = [];
        const comic = document.querySelectorAll('.page-chapter img');
        const attr = comic[2].getAttribute('data-cdn') == null ? 'src' : 'data-cdn';
        for (let i = 1; i < comic.length; i++) {
            const imgComic = comic[i].getAttribute(attr);
            list.push({ imgComics: imgComic });
        }
        return { comicName, chap, images: { ...list } };
    }
}

module.exports = Model;
