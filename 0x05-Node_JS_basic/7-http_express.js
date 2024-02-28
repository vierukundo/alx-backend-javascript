const express = require('express');

const app = express();
const port = 1245;
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        let result = `Number of students: ${lines.length - 1}`; // Subtract 1 to exclude header

        const studentsPerField = {};
        for (let j = 1; j < lines.length; j += 1) {
          const student = lines[j].split(',');
          const field = student[student.length - 1].trim();

          studentsPerField[field] = studentsPerField[field] || [];
          studentsPerField[field].push(student[0]);
        }

        Object.entries(studentsPerField).forEach(([field, list]) => {
          result = result.concat(`\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });

        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
