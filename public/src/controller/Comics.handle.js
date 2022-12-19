const comic = require('../model/comic.model');
const { convertMyLinkChap } = require('../../../util/main');
var url = process.env.URL;

class HomesController {
    static async infoComic(req, res, next) {
        try {
            const comics = await comic.getChaptersComic(`${url}/truyen-tranh/${req.params.slug}`);
            res.render('infoComic', { comics });
        } catch (err) {
            next(err);
        }
    }

    static async readComic(req, res, next) {
        try {
            const comics = await comic.getImagesComic(`${url}/truyen-tranh/${req.params.slug}`);
            const prev = comics.chap === '0' ? '' : convertMyLinkChap(req.params.slug, parseInt(comics.chap) - 1);
            comics.controls = {
                nextChap: convertMyLinkChap(req.params.slug, parseInt(comics.chap) + 1),
                prevChap: prev,
            };
            res.render('readComic', { comics });
            // res.json({ comics });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = HomesController;
