const home = require('../model/home.model');

class HomesController {
    static async index(req, res, next) {
        try {
            const comics = await home.getHomeComics(url);
            console.log(url);
            const nominations = comics.nominations;
            const latest = comics.latest;
            res.render('home', { nominations, latest });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = HomesController;
