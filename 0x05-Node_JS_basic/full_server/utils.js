// full_server/utils.js

const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const studentsPerField = {};
        for (let j = 1; j < lines.length; j += 1) {
          const student = lines[j].split(',');
          const field = student[student.length - 1].trim();

          studentsPerField[field] = studentsPerField[field] || [];
          studentsPerField[field].push(student[0]);
        }

        resolve(studentsPerField);
      })
      .catch(() => { // Add parameter to catch block
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = readDatabase;
