export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  const studentsByCity = studentsList.filter((student) => student.location === city);
  return studentsByCity;
}
