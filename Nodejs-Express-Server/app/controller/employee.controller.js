const db = require('../config/db.config.js');
const Employee = db.employees;

// Post a Employee
exports.create = (req, res) => {	
	// Save to MySQL database
	let employee = req.body;
	Employee.create(employee).then(result => {		
		// Send created Employee to client
		res.json(result);
		//console.log(employee)
	});
};
 
// Fetch all Employee
exports.findAll = (req, res) => {
	Employee.findAll().then(employees => {
	  // Send all Employees to Client
	  res.json(employees);

	});
};

// Find a Employee by Id
exports.findById = (req, res) => {	
	Employee.findById(req.params.employeeId).then(employee => {
		res.json(employee);
		
	})
};
 
// Update a employee
exports.update = (req, res) => {
	let employee = req.body;
	let id = req.body.id;
	Employee.update(employee, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a employee with id = " + id});
				   });	
};
 
// Delete a employee by Id
exports.delete = (req, res) => {
	const id = req.params.employeeId;
	Employee.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a employee with id = ' + id});
	});
};