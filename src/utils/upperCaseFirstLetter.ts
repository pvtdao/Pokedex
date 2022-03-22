export default function upperCaseFirstLetter(name: string = '') {
  if (!name) return '';

  const firstLetter = name
    .substring(0, 1)
    .replace(name.charAt(0), name.charAt(0).toUpperCase());

  const restLetter = name.substring(1).toLowerCase();

  const result = firstLetter + restLetter;

  return result;
}
