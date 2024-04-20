function searchMatrix(matrix: number[][], target: number): boolean {
  let leftArray = 0;
  let rightArray = matrix.length - 1;
  let mid = Math.round((leftArray + rightArray) / 2);
  while (leftArray <= rightArray) {
    const midArray = matrix[mid];

    if (target >= midArray[0] && target <= midArray[midArray.length - 1]) {
      return binarySearch(midArray, target);
    }

    if (target < midArray[0]) {
      rightArray = mid - 1;
      mid = Math.round((leftArray + rightArray) / 2);
      continue;
    }

    if (target > midArray[midArray.length - 1]) {
      leftArray = mid + 1;
      mid = Math.round((leftArray + rightArray) / 2);
      continue;
    }
  }

  return false;
}

function binarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.round((left + right) / 2);

  while (left <= right) {
    if (array[mid] === target) {
      return true;
    }

    if (array[mid] > target) {
      right = mid - 1;
      mid = Math.round((left + right) / 2);
      continue;
    }

    if (array[mid] < target) {
      left = mid + 1;
      mid = Math.round((left + right) / 2);
      continue;
    }
  }

  return false;
}