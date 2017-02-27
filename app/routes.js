module.exports = function (app) {
	  
		// application -------------------------------------------------------------
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });

    // api ---------------------------------------------------------------------

};
