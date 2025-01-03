function searchInsert(nums: number[], target: number): number {
  // return nums.filter((num) => num < target).length;
  let i = 0;
  while (nums[i] < target) {
    i++;
  }
  return i;
}
