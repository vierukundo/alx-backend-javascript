// more complex HTTP server using Node's HTTP module

const fs = require('fs').promises;
const http = require('http');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 to exclude header

        const studentsPerField = {};
        for (let j = 1; j < lines.length; j += 1) {
          const student = lines[j].split(',');
          const field = student[student.length - 1].trim();

          studentsPerField[field] = studentsPerField[field] || [];
          studentsPerField[field].push(student[0]);
        }

        Object.entries(studentsPerField).forEach(([field, list]) => {
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write(`This is the list of our students${data}`);
        res.end(data);
      })
      .catch((err) => {
        res.write('This is the list of our students');
        res.end(err.message);
      });
  }
});

app.listen(1245, () => {});
module.exports = app;
