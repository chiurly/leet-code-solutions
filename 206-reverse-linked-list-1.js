/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = head => {
  let previous = null

  while (head) {
    let next = head.next
    head.next = previous
    previous = head
    head = next
  }

  return previous
}

console.log(reverseList([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log(reverseList([1, 2])) // [2, 1]
console.log(reverseList([])) // []
