// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 to exclude header

    const studentsPerField = {};
    for (let j = 1; j < lines.length; j += 1) {
      const student = lines[j].split(',');
      const field = student[student.length - 1].trim();

      if (studentsPerField[field]) {
        studentsPerField[field].push(student[0]);
      } else {
        studentsPerField[field] = [student[0]]; // Fixed assignment to an array
      }
    }

    Object.keys(studentsPerField).forEach((field) => {
      const list = studentsPerField[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
