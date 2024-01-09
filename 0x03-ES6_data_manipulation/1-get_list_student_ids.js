export default function getListStudentIds(objList) {
  if (!Array.isArray(objList)) {
    return [];
  }

  const idArray = objList.map((obj) => obj.id);

  return idArray;
}
