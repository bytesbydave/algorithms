const mnReversals = require('./index');

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

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

printList(linkedList);

describe('MN Reversals', () => {
  it('reverses [1,2,3,4,5] with m=2, n=4 to return [1,4,3,2,5]', () => {
    const list = [1, 2, 3, 4, 5];
    const linkedList = generateLinkedList(list);
    const response = mnReversals(linkedList);
    expect(response).toEqual(null);
  });

  it('reverses [1,2,3,4,5] with m=1, n=5 to return [5,4,3,2,1]', () => {
    const list = [1, 4, 3, 2, 5];
    const linkedList = generateLinkedList(list);
    const response = mnReversals(linkedList);
    expect(response).toEqual(null);
  });

  it('reverses [1] with m=1, n=1 to return [1]', () => {
    const list = [1];
    const linkedList = generateLinkedList(list);
    const response = mnReversals(linkedList);
    expect(response).toEqual(null);
  });

  it('reverses null with m=0, n=0 to return null', () => {
    const list = [];
    const linkedList = generateLinkedList(list);
    const response = mnReversals(linkedList);
    expect(response).toEqual(null);
  });
});
