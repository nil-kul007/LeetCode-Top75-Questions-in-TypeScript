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