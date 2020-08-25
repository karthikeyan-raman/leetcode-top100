'use strict';

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
*/
function twoSum(nums, target) {
  const diffMap = {};
  for (const [i, num] of nums.entries()) {
    const targetDiff = target - num;
    if (diffMap[targetDiff] !== undefined) {
      return [diffMap[targetDiff], i];
    }
    diffMap[num] = i;
  }
}
