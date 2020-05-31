module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define('employee', {
		firstname: {
			type: Sequelize.STRING
		},
		lastname: {
			type: Sequelize.STRING
		},
		contactEmail: {
			type: Sequelize.STRING
		},
		companyEmail: {
			type: Sequelize.STRING
		},
		birthDate: {
			type: Sequelize.STRING
		},
		hiredDate: {
			type: Sequelize.STRING
		}, 
		businessUnit: {
			type: Sequelize.STRING
		},
		age: {
			type: Sequelize.INTEGER
		}
	});

	return Employee;
}