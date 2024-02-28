// full_server/controllers/StudentsController.js
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.status(200);
    readDatabase(process.argv[2])
      .then((data) => {
        const fields = Object.keys(data);
        fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        let result = 'This is the list of our students';
        for (const field of fields) {
          const list = data[field];
          const students = list.join(', ');
          result = result.concat(`\nNumber of students in ${field}: ${list.length}. List: ${students}`);
        }
        res.send(result);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params; // Corrected to access the 'major' parameter
    const allowedMajors = ['CS', 'SWE'];
    if (!allowedMajors.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return; // Ensure to exit the function if the major is not allowed
    }
    readDatabase(process.argv[2])
      .then((data) => {
        const list = data[major];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
