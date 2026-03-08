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