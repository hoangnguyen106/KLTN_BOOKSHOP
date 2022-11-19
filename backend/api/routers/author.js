'use strict'
const author_controller = require('../controllers/author');
module.exports = (app) => {
    app.route('/author')
        .get(author_controller.getAuthor);
    app.route('/author/all/:page')
        .get(author_controller.getAll);
    app.route('/author/name/:id')
        .get(author_controller.getNameByID)
}