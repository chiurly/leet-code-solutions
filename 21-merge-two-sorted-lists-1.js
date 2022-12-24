/**
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (list1, list2) => {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  let head

  if (list1.val <= list2.val) {
    head = list1
    list1 = list1.next
  } else {
    head = list2
    list2 = list2.next
  }

  let tail = head

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }
    tail = tail.next
  }

  if (list1) {
    tail.next = list1
  } else {
    tail.next = list2
  }

  return head
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // [1, 1, 2, 3, 4, 4]
console.log(mergeTwoLists([], [])) // []
console.log(mergeTwoLists([], [0])) // [0]
