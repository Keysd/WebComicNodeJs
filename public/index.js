const { TextEncoder, TextDecoder } = require('util');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const route = require('./routes/index');

const app = express();
const port = process.env.PORT;

app.use('/static', express.static(path.join(__dirname, '/static')));
console.log(__dirname);
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            replacePath(path, str, route) {
                const url = process.env.URL;
                const newPath = path.replace(url + str, route);

                return newPath;
            },
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

route(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
