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