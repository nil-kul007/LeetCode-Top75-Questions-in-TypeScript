class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class NodeList {
    constructor(arr) {
        this.head = new ListNode(arr[0]);
        let current = this.head;

        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
    }
}
