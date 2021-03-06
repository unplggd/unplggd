module.exports = {
    head   : {
        title        : 'Unplggd',
        titleTemplate: '%s - Nuxt.js',
        meta         : [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', content: "Nuxt.js project"}
        ],
        script       : [
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js'},
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'}
        ],
        link         : [
            {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
            {
                rel : 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'
            }
        ]
    },
    css    : ['~assets/css/main.css'],
    loading: {color: '#cc0000'},
    plugins: [],
    build  : {
        vendor: ['axios']
    },
    env    : {
        url : 'http://localhost:3000',
        port: 3000
    }
};