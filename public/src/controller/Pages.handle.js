const page = require('../model/page.model');
var url = process.env.URL;

class PagessController {
    static async page(req, res, next) {
        try {
            const slug = req.params.page;
            const pageComics = await page.getPageComics(`${url}/truyen-moi-cap-nhat/${slug}`);
            pageComics.namePage = '/truyen-moi-cap-nhat/';
            res.render('page', { pageComics });
            // res.json({ pageComics });
        } catch (err) {
            next(err);
        }
    }

    static async comicTop(req, res, next) {
        try {
            const slug = req.params.page;
            const pageComics = await page.getPageComics(`${url}/${slug}`);
            // pageComics.namePage = '/truyen-moi-cap-nhat/';
            res.render('page', { pageComics });
        } catch (err) {
            next(err);
        }
    }

    static async category(req, res, next) {
        try {
            const slug = req.params.page;
            const pageComics = await page.getPageComics(`${url}/the-loai/${slug}`);
            res.render('page', { pageComics });
        } catch (err) {
            next(err);
        }
    }

    static async search(req, res, next) {
        try {
            const pageComics = await page.getPageComics(`${url}/tim-kiem.html?q=${req.params.slug}`);
            res.render('page', { pageComics });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = PagessController;
