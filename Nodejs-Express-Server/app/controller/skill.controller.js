const db = require('../config/db.config.js');
const Skill = db.skill;

// Post a skill
exports.create = (req, res) => {	
	// Save to MySQL database
	let skill = req.body;
	Skill.create(skill).then(result => {		
		// Send created skill to client
		res.json(result);
	});
};
 
// Fetch all skills
exports.findAll = (req, res) => {
	Skill.findAll().then(skills => {
	  // Send all skills to Client
	  res.json(skills);

	});
};

// Find a Employee skills by Id
exports.findById = (req, res) => {	
	Skill.findById(req.params.employeeId).then(skill => {
		res.json(skill);
		
	})
};
