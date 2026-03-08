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