export default function cleanSet(inputSet, startString) {
  if (!(inputSet instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input types. Expecting a Set and a string.');
  }
  if (startString === '') {
    return '';
  }
  const result = Array.from(inputSet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
