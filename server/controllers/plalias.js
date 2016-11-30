/* controller file */

function Controller() {
    /* post route returns universe */
    this.hello = function(req, res, next) {
        res.type('text/plain');
        console.log(req.body);
        res.send("universe");
    }
    /* root route returns unix timestamp */
    this.root = function(req, res, next) {
        res.type('text/html');
        res.send("unix time: " + Math.floor(Date.now()/1000));
    }
    /* render a test page to test the post route */
    this.test = function(req, res, next) {
        res.type('text/html');
        res.render("test");
    }
    /* any other routes will return a 404 "not found" */
    this.unknown = function(req, res, next) {
        res.type('text/plain');
        res.status(404).send("unknown");
    }
}
module.exports = new Controller();
