module.exports = {
    block: 'page',
    title: 'Чатикс',
    // favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { charset: 'UTF-8' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0' } },
        { elem: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' } },
        { elem: 'link', attrs: { rel:'preconnect', href:'https://fonts.googleapis.com' } },
        { elem: 'link', attrs: { rel:'preconnect', href:'https://fonts.gstatic.com'} },
        { elem: 'link', attrs: { href:'https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;700&display=swap', rel:'stylesheet' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header'
        },
        {
            block: 'main'
        },
        {
            block: 'footer',
        }
    ]
};
