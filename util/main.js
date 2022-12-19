module.exports = {
    convertMyLinkChap: function (url, chap) {
        const end = url.lastIndexOf('.html');
        const start = url.lastIndexOf('-', end) + 1;

        const newChar = url.slice(0, start) + chap + url.slice(end, url.length);

        return newChar;
    },
};
