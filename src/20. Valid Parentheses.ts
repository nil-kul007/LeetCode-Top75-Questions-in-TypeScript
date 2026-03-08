// Time: O(n), Space: O(n)
function isValid(s: string): boolean {
    const pairsSet = '() {} []'
    let stack = []
    
    for(let char of s){
        stack.push(char)
        let left = stack[stack.length-2]
        let right = stack[stack.length-1]
        if(pairsSet.includes(left + right)){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0
}