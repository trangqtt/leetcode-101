function sortArrayByParityII(nums: number[]): number[] {
  let e = 0;
  let o = 1;

  while (e < nums.length) {
    if (nums[e] % 2 !== 0) {
      while (nums[o] % 2 !== 0) o += 2;
      var temp = nums[e];
      nums[e] = nums[o];
      nums[o] = temp;
    }
    e += 2;
  }
  return nums;
}
