// routes/user_routes.js
var userDao  = require('../daos/user_dao');

module.exports = function(app) {
	/*
	*	kinda routes kinda controller
	*/

	// Sends user by username
	app.get('/users/message/:username',
		(req, res) => {
			    res.status(422).send({ operation: 'message to user Get by Username Errors', errors: userDao.saveUser(req.params.username) });

  		}
  	);

	
};