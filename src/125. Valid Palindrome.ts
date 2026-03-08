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


// Time Complexity: O(n) - single pass through the string with two pointers
// Space Complexity: O(1) - only using two pointer variables, no extra data structures

function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length-1
    while(left < right){
        if(!isValiedChar(s[left])){
            left++
        } else if(!isValiedChar(s[right])){
            right--
        } else {
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }
            left++
            right--
        }
    }
    return true
};

const isValiedChar = (char: string) : boolean => {
    return /[a-z0-9]/i.test(char)
}
