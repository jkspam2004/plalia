/* routes file */
var plalia = require('../controllers/plalias.js');

module.exports = function(app) {
    app.post('/hello', plalia.hello);
    app.get('/', plalia.root);
    app.get('/test', plalia.test);
    app.get('*', plalia.unknown);
}
