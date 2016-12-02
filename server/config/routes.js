/* routes file */

var fs = require('fs'); //included in express or node - reading file system
var path = require('path'); //included in express or node - reading file system
var controllers_path = path.join(__dirname, './../controllers');
//Load all controllers
var exports = {};
fs.readdirSync(controllers_path).forEach(function(file) {
    if (file.search(/.js$/) >= 0) {
        var name = file.replace('.js', '');
        exports[name] = require(controllers_path + '/' + file);
    }
});
console.log(exports);

module.exports = function(app) {
    app.post('/hello', exports.plalias.hello);
    app.get('/', exports.plalias2.root);
    app.get('/test', exports.plalias.test);
    app.get('*', exports.plalias.unknown);
}
