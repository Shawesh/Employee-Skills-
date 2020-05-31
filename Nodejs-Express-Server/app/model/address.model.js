module.exports = (sequelize, Sequelize) => {
	const Address = sequelize.define('address', {
		street: {
			type: Sequelize.STRING
		},
		suite: {
			type: Sequelize.STRING
		},
		city: {
			type: Sequelize.STRING
		},
		region: {
			type: Sequelize.STRING
		},
		postal: {
			type: Sequelize.STRING
		},
		country: {
			type: Sequelize.STRING
		},
		employeeId: {
			type: Sequelize.INTEGER
		}
	});

	return Address;
}