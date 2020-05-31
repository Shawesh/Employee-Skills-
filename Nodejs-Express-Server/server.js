var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

require('./app/route/employee.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

function initial(){

  let employees = [
    {
      id:1,
      firstname: "Zakk",
      lastname: "James",
      contactEmail: "James@orgA.com",
      companyEmail: "info@orA.com",
      birthDate: "10/12/1985",
      hiredDate: "10/12/2014",
      role: "Programmer",
      businessUnit: "Development",
      age: 36
    },
    {
      id:2,
      firstname: "Mike",
      lastname: "Marcus",
      contactEmail: "James@orgA.com",
      companyEmail: "info@orA.com",
      birthDate: "10/12/1985",
      hiredDate: "10/12/2014",
      role: "Programmer",
      businessUnit: "Development",
      age: 36
    },
    {
      id:3,
      firstname: "Steve",
      lastname: "Jones",
      contactEmail: "Jones@orgC.com",
      companyEmail: "info@orC.com",
      birthDate: "10/12/1960",
      hiredDate: "10/12/2001",
      role: "Manager",
      businessUnit: "Development",
      age: 100
    },
    {
      id:4,
      firstname: "Aaron",
      lastname: "Jackson",
      contactEmail: "Jackson@orgf.com",
      companyEmail: "info@orf.com",
      birthDate: "10/12/1990",
      hiredDate: "10/12/2017",
      role: "Programmer",
      businessUnit: "Operation",
      age: 36
    }
  ]
  let addresses = [
    {
      id:1,
      street: "123 Main St.",
      suite: "Apt. 456",
      city: "Detroit",
      region: "MI",
      postal: "48201",
      country: "US",
      employeeId: 1
    }
  ]

  let skills = [
    {
      id:1,
      experience: 60,
      summary: "Worked with mulit-threading and generics.",
      employeeId: 1
    },
    {
      id:2,
      experience: 10,
      summary: "AKKA and Scala",
      employeeId: 1
    }
  ]
  let fields = [
    {
      id:1,
      name: "Java",
      type: "Software Development",
      employeeId: 1
    }
  ]
  // Init data -> save to MySQL
  const Employee = db.employees;
  for (let i = 0; i < employees.length; i++) { 
    Employee.create(employees[i]);  
  }
  
  const Address = db.address;
  for (let i = 0; i < addresses.length; i++) { 
    Address.create(addresses[i]);  
  }
  
  const Skill = db.skill;
  for (let i = 0; i < skills.length; i++) { 
    Skill.create(skills[i]);  
  }
  const Field = db.field;
  for (let i = 0; i < fields.length; i++) { 
    Field.create(fields[i]);  
  }
}