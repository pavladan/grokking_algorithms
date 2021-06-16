export default function quickSort<T>(arr: T[]): T[] {
  const length = arr.length;
  if (length < 2) return arr;

  const pivot = arr[0];
  const arrWithoutPivot = arr.slice(1);
  const less = arrWithoutPivot.filter((el) => el <= pivot);
  const greater = arrWithoutPivot.filter((el) => el > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
