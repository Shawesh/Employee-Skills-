const db = require('../config/db.config.js');
const Address = db.address;

// Post a address
exports.create = (req, res) => {	
	// Save to MySQL database
	let Address = req.body;
	Address.create(address).then(result => {		
		// Send created address to client
		res.json(result);
	});
};
 
// Fetch all addresses
exports.findAll = (req, res) => {
	Address.findAll().then(addresses => {
	  // Send all addresses to Client
	  res.json(addresses);

	});
};

// Find a Employee addresses by Id
exports.findById = (req, res) => {	
	Address.findById(req.params.employeeId).then(address => {
		res.json(address);
		
	})
};
