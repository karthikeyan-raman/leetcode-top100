'use strict';

/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */
function lengthOfLongestSubstring(str) {
  const map = {};
  let maxLen = 0;
  let start = 0;
  const strArray = str.split('');
  for (const [i, char] of strArray.entries()) {
    const alreadyVisited = map[char];
    if (alreadyVisited != null && start <= alreadyVisited) {
      start = alreadyVisited + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }
    map[char] = i;
  }
  return maxLen;
}

lengthOfLongestSubstring('bbbb');
