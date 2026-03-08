# LeetCode Top75 Questions in TypeScript

## [1. Two Sum (Easy)](https://leetcode.com/problems/two-sum/)

<details>
<summary>Show Solution</summary>

```typescript
// Time Complexity: O(n) - single pass through the array
// Space Complexity: O(n) - map stores up to n elements
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let [idx, num] of nums.entries()) {
        const complement = target - num;
        if (map.has(complement)) {
            return [map.get(complement)!, idx];
        }
        map.set(num, idx);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
```

</details>

## [121. Best Time to Buy and Sell Stock (Easy)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

<details>
<summary>Show Solution</summary>

```typescript
function maxProfit(prices: number[]): number {
    // Time Complexity: O(n) - single pass through the prices array
    // Space Complexity: O(1) - only using constant extra space (buy, profit variables)
    
    let buy: number = prices[0]
    let profit: number = 0
    for(let price of prices){
        if(buy > price){
            buy = price
        } else {
            profit = Math.max(profit, price - buy)
        }
    }
    return profit
};
```

</details>

## [125. Valid Palindrome (Easy)](https://leetcode.com/problems/valid-palindrome/)

 *   - String comparison: O(n)
 * 
 * - Space Complexity: O(n) where n is the length of the input string
 *   - `replace()` creates a new string: O(n)
 *   - `split()` creates an array: O(n)
 *   - `reverse()` creates a reversed array: O(n)
 */
// function isPalindrome(s: string): boolean {
//     let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
//     return str.split('').reverse().join('') === str
// };


// Time Complexity: O(n) - /utils/ListNode.js";

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
import { TreeNode } from "./utils/ListNode";


/**
 * Inverts a binary tree by swapping the left and right children of each node.
 * 
 * @param root - The root node of the binary tree to invert, or null if the tree is empty
 * @returns The root of the inverted binary tree, or null if the input is null
 * 
 * @remarks
 * This function uses a recursive approach to traverse the tree and swap children.
 * 
 * Time Complexity: O(n) - where n is the number of nodes in the tree, as each node must be visited once
 * Space Complexity: O(h) - where h is the height of the tree, due to the recursive call stack
 *                           In the worst case (skewed tree), this becomes O(n)
 *                           In the best case (balanced tree), this becomes O(log n)
 */
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) return null;
//     if(!root.left && !root.right) return root;

//     const left = invertTree(root.left)
//     const right = invertTree(root.right)

//     root.left = right
//     root.right = left

//     return root
// };

// =============================++=============================

/**
 * Inverts a binary tree by recursively swapping the left and right children of each node.
 * 
 * @param root - The root node of the binary tree to invert, or null if the tree is empty
 * @returns The root node of the inverted binary tree, or null if the input is null
 * 
 * @example
 * // Before: Tree with root 4, left child 2, right child 7
 * // After: Tree with root 4, left child 7, right child 2
 * const inverted = invertTree(root);
 * 
 * @complexity
 * - **Time Complexity**: O(n) where n is the number of nodes in the tree.
 *   Each node must be visited exactly once to swap its children.
 * - **Space Complexity**: O(h) where h is the height of the tree.
 *   In the worst case (skewed tree), this is O(n). In the best case (balanced tree), this is O(log n).
 *   The space is used by the recursive call stack.
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    if (root.left || root.right) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }
    return root;
}
```

</details>

## [242. Valid Anagram (Easy)](https://leetcode.com/problems/valid-anagram/)

<details>
<summary>Show Solution</summary>

```typescript
/**
 * Determines whether two strings are anagrams of each other.
 * 
 * An anagram is a word or phrase formed by rearranging the letters of another,
 * typically using all the original letters exactly once.
 * 
 * @param s - The first string to compare
 * @param t - The second string to compare
 * @returns `true` if `t` is an anagram of `s`, `false` otherwise
 * 
 * @example
 * isAnagram("anagram", "nagaram") // returns true
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

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage:
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target)); // Output: 4
```

</details>
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