export default function getStudentIdsSum(studentsList) {
  // Check if studentsList is an array
  if (!Array.isArray(studentsList)) {
    return 0;
  }

  // Use map to get an array of student ids
  const studentIds = studentsList.map((student) => student.id);

  // Use reduce to calculate the sum of student ids
  const idsSum = studentIds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return idsSum;
}
