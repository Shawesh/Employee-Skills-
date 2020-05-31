module.exports = function(app) {
 
    const employees = require('../controller/employee.controller.js');
    const skills = require('../controller/skill.controller.js');
    const addresses = require('../controller/address.controller.js');

    // Create a new employees
    app.post('/api/employees', employees.create);
 
    // Retrieve all employee
    app.get('/api/employees', employees.findAll);
 
    // Retrieve a single employee by Id
    app.get('/api/employees/:employeeId', employees.findById);
 
    // Update a employee with Id
    app.put('/api/employees', employees.update);
 
    // Delete a employees with Id
    app.delete('/api/employees/:employeeId', employees.delete);

 /*************Skills *********/
    app.post('/api/skills', skills.create);
 
    // Retrieve all skills
    app.get('/api/skills', skills.findAll);
        // Retrieve a single employee by Id
    app.get('/api/skills/:employeeId', skills.findById);
 
     /*************addresses *********/
     app.post('/api/addresses', addresses.create);
 
     // Retrieve all skills
     app.get('/api/addresses', addresses.findAll);
         // Retrieve a single employee by Id
     app.get('/api/addresses/:employeeId', addresses.findById);
}