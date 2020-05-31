module.exports = (sequelize, Sequelize) => {
	const Skill = sequelize.define('skill', {
		experience: {
			type: Sequelize.INTEGER
		},
		summary: {
			type: Sequelize.STRING
		},
		employeeId: {
			type: Sequelize.INTEGER
		}
	});

	return Skill;
}