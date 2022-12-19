const homesRouter = require('./home');
const comicsRouter = require('./comic');
const pagesRouter = require('./page');

function route(app) {
    app.use('/comic', comicsRouter);
    app.use('/', pagesRouter);
    app.use('/', homesRouter);
}

module.exports = route;
