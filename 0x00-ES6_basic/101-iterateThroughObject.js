export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let iteratorResult = reportWithIterator.next();

  while (!iteratorResult.done) {
    str += iteratorResult.value;
    iteratorResult = reportWithIterator.next();

    if (!iteratorResult.done) {
      str += ' | ';
    }
  }
  return str;
}
