export default function createIteratorObject(report) {
  const emps = Object.values(report.allEmployees);
  const employees = [];
  for (const emp of emps) {
    for (const e of emp) {
      employees.push(e);
    }
  }
  let index = 0;

  return {
    next() {
      return index < employees.length
        ? { value: employees[index++], done: false } // eslint-disable-line
        : { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
