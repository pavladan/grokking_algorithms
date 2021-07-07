export default (firstWord: string, secondWord: string) => {
  const firstWordLength = firstWord.length;
  const secondWordLength = secondWord.length;
  const matrix: number[][] = Array.from(
    Array(firstWordLength),
    () => new Array(secondWordLength)
  );

  let sizeSequence = 0;
  let indexSequence = 0;

  for (let i = 0; i < firstWordLength; i++) {
    for (let j = 0; j < secondWordLength; j++) {
      if (firstWord[i] === secondWord[j]) {
        matrix[i][j] = (i && j) > 0 ? matrix[i - 1][j - 1] + 1 : 1;
        if (matrix[i][j] >= sizeSequence) {
          sizeSequence = matrix[i][j];
          indexSequence = i + 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return firstWord.slice(indexSequence - sizeSequence, indexSequence);
};
