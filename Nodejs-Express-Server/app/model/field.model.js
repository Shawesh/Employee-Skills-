module.exports = (sequelize, Sequelize) => {
	const Filed = sequelize.define('field', {
		name: {
			type: Sequelize.STRING
		},
		type: {
			type: Sequelize.STRING
		},
		employeeId: {
			type: Sequelize.INTEGER
		}
	});

	return Filed;
}