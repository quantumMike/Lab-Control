var mongoose = require('mongoose');

var DR2ADDR = 'mongodb://localhost';

var DR2Connections = {
	dataDB: mongoose.createConnection(DR2ADDR + '/data'),
	historyDB: mongoose.createConnection(DR2ADDR + '/history')
};

module.exports = DR2Connections;