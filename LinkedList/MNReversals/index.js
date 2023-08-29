// Given a linked list and numbers m and n, return it back with only positions m to n in reverse

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// m = 2, n = 4

// 1 -> 4 -> 3 -> 2 -> 5 -> null

// Verify constraints
// Q: Will m and n always be within the bounds of the linked list?
// A: Yes, assume 1<=m<=n<=length of the linked list

// Q: Can we receive m and m values for the whole linked list?
// A: Yes, we can receive m=1 and n=length of the linked list

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

function mnReversals() {}

module.exports = mnReversals;
