export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const updatedStudentsGradeByCity = studentsList
    .filter((student) => student.location === city)
    .map((ob) => {
      const gradeObjs = newGrades.filter((gradeObj) => gradeObj.studentId === ob.id);

      // Create a new object instead of modifying the function parameter directly
      return {
        ...ob,
        grade: gradeObjs.length > 0 ? gradeObjs[0].grade : 'N/A',
      };
    });

  return updatedStudentsGradeByCity;
}
