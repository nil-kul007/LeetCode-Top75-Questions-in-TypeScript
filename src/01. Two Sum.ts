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