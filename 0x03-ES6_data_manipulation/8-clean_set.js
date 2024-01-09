export default function cleanSet(inputSet, startString) {
  if (!(inputSet instanceof Set) || typeof startString !== 'string' || !startString || !inputSet) {
    return '';
  }

  const result = Array.from(inputSet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
