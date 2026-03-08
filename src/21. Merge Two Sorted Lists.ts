import { ListNode } from "./utils/ListNode.js";

/**
 * Merge two sorted linked lists into a single sorted linked list.
 * 
 * Time Complexity: O(n + m) where n and m are the lengths of list1 and list2
 * Space Complexity: O(1) - only using a constant amount of extra space for pointers
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergedList: ListNode = new ListNode(0)
    let dummy: ListNode = mergedList

    while(list1 && list2){
        if(list1.val <= list2.val){
            dummy.next = list1
            list1= list1.next
        } else {
            dummy.next = list2
            list2= list2.next
        }
            dummy= dummy.next
    }
    if(list1){
        dummy.next = list1
    }
    if(list2){
        dummy.next = list2
    }
    return mergedList.next
};

export { mergeTwoLists };