export class ListNode {
  val: any;
  next: ListNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

export class NodeList {
  head: ListNode;

  constructor(arr: any[]) {
    this.head = new ListNode(arr[0]);
    let current = this.head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
  }
}

/**
 * Definition for a binary tree node.
*/
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
