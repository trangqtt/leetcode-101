/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const arr: number[] = [];
  for (let index = 0; index < m + n; index++) {
    if (index < m) {
      arr.push(nums1[index]);
    } else {
      arr.push(nums2[index - m]);
    }
  }
  nums1.splice(0, m + n, ...arr.sort((a, b) => a - b));
}
