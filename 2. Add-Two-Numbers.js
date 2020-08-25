'use strict';

/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function arrayToNum(l1Stack) {
  let num = '';
  while (l1Stack.length > 0) {
    num += l1Stack.pop();
  }
  return BigInt(num);
}

function traverseList(list) {
  const stack = [];
  stack.push(list.val);
  if (list.next) {
    stack.push(...traverseList(list.next));
  }
  return stack;
}

function addNodeToEnd(list, node) {
  if (list.val === undefined) {
    list = node;
  } else if (list.next === null) {
    list.next = node;
  } else {
    addNodeToEnd(list.next, node);
  }
  return list;
}

function constructReverseListFromArray(numList) {
  let list = null;
  for (const num of numList) {
    const node = {
      val: num,
      next: null,
    };
    if (list === null) {
      list = node;
    } else {
      node.next = list;
      list = node;
    }
  }
  return list;
}

function constructReverseList(number) {
  const numList = number.toString().split('').map((n) => parseInt(n, 10));
  return constructReverseListFromArray(numList);
}

function addTwoNumbers(l1, l2) {
  const l1Stack = traverseList(l1);
  const l2Stack = traverseList(l2);
  return constructReverseList((arrayToNum(l1Stack) + arrayToNum(l2Stack)));
}
