const reverseLinkedList = require('./index');

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
function generateLinkedList(arr) {
  const linkedList = arr.reduce((acc, val) => new ListNode(val, acc), null);
  return linkedList;
}

describe('reverseLinkedList', () => {
  it('reverses the linked list [5,4,3,2,1]', () => {
    const list = [5, 4, 3, 2, 1];
    const linkedList = generateLinkedList(list);
    const response = reverseLinkedList(linkedList);
    expect(response).toEqual({
      next: {
        next: { next: { next: { next: null, val: 1 }, val: 2 }, val: 3 },
        val: 4,
      },
      val: 5,
    });
  });

  it('returns null when provided null', () => {
    const list = [];
    const linkedList = generateLinkedList(list);
    const response = reverseLinkedList(linkedList);
    expect(response).toEqual(null);
  });

  it('returns 3 when provided [3]', () => {
    const list = [3];
    const linkedList = generateLinkedList(list);
    const response = reverseLinkedList(linkedList);
    expect(response).toEqual({ next: null, val: 3 });
  });
});
