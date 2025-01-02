function sortArrayByParityII(nums: number[]): number[] {
  const arr: number[] = [nums[0]];
  nums.reduce((acc, num) => {
    if (num % 2 === 0) {
      arr.unshift(num);
    } else {
      arr.push(num);
    }
    return acc;
  });

  for (let curr = 1; curr < arr.length / 2; curr += 2) {
    var temp = arr[curr];
    arr[curr] = arr[arr.length - 1 - curr];
    arr[arr.length - 1 - curr] = temp;
  }
  return arr;
}
