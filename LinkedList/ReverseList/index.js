// Given a linked list, return it in reverse

/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

printList(linkedList);

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Time complexity: O(N)
// Space complexity: O(1)

module.exports = reverseLinkedList;
