'use strict'
const comment_controller = require('../controllers/comment');
module.exports = (app) => {
    app.route('/comment')
        .post(comment_controller.mycomment);
    app.route('/comment/book')
        .post(comment_controller.getCommentByIDBook)
}