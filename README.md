# LeetCode Top75 Questions in TypeScript

## [1. Two Sum (Easy)](https://leetcode.com/problems/two-sum/)

[View Solution](./src/01. Two Sum.ts)

## [121. Best Time to Buy and Sell Stock (Easy)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

[View Solution](./src/121. Best Time to Buy and Sell Stock.ts)

## [125. Valid Palindrome (Easy)](https://leetcode.com/problems/valid-palindrome/)

<details>
<summary>Show Solution</summary>

```typescript
/**
 * Determines if a string is a valid palindrome, considering only alphanumeric characters.
 * 
 * @param s - The input string to check for palindrome property
 * @returns `true` if the string is a palindrome (ignoring non-alphanumeric characters and case), `false` otherwise
 * 
 * @example
 * isPalindrome("A man, a plan, a canal: Panama") // returns true
 * isPalindrome("race a car") // returns false
 * 
 * @remarks
 * - Time Complexity: O(n) where n is the length of the input string
 *   - `replace()`: O(n)
 *   - `toLowerCase()`: O(n)
 *   - `split()`: O(n)
 *   - `reverse()`: O(n)
 *   - `join()`: O(n)
[View Solution](./src/125. Valid Palindrome.ts)
    return stack.length === 0
}
```

</details>

## [21. Merge Two Sorted Lists (Easy)](https://leetcode.com/problems/merge-two-sorted-lists/)

<details>
<summary>Show Solution</summary>

```typescript
import { ListNode } from "../utils/ListNode.js";

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
```

</details>

## [226. Invert Binary Tree (Easy)](https://leetcode.com/problems/invert-binary-tree/)

<details>
<summary>Show Solution</summary>

```typescript
import { TreeNode } from "../utils/ListNode";


/**
 * Inverts a binary tree by swapping the left and right children of each node.
 * 
[View Solution](./src/20. Valid Parentheses.ts)

// =============================++=============================

/**
[View Solution](./src/21. Merge Two Sorted Lists.ts)am("anagram", "nagaram") // returns true
 * isAnagram("rat", "car") // returns false
 * 
 * @complexity
 * Time: O(n log n) - where n is the length of the strings (due to sorting)
 * Space: O(n) - for the split arrays and sorted strings    
 */
function isAnagram(s: string, t: string): boolean {
    // if (s.length !== t.length) return false;

    return s.split('').sort().join('') === t.split('').sort().join('');
}
```

</details>

## [704. Binary Search (Easy)](https://leetcode.com/problems/binary-search/)

<details>
<summary>Show Solution</summary>

```typescript
/**
 * Performs a binary search on a sorted array to find the target value.
 * 
 * @param nums - A sorted array of numbers to search through
 * @param target - The number value to search for
 * @returns The index of the target if found, otherwise -1
 * 
 * @remarks
 * This implementation uses the binary search algorithm, which repeatedly divides
 * the search space in half by comparing the middle element with the target.
 * 
 * **Time Complexity:** O(log n) - where n is the length of the array
 * **Space Complexity:** O(1) - only uses constant extra space for variables (left, right, mid)
 * 
 * **Precondition:** The input array must be sorted in ascending order
 */
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

[View Solution](./src/226. Invert Binary Tree.ts)[View Solution](./src/242. Valid Anagram.ts)[View Solution](./src/704. Binary Search.ts)