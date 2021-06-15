function findSmallest<T>(arr: T[]): number {
  let smallestIndex = 0;
  let smallestElement = arr[smallestIndex];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

export default <T>(arr: T[]) => {
  const sortedArray: T[] = [];
  const length = arr.length;
  for (let i: number = 0; i < length; i++) {
    const smallestIndex: number = findSmallest(arr);
    sortedArray.push(arr.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};
