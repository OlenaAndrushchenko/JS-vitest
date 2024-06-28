
export function calculator(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)) return 'unknown value';
    
    let total 
    const operators = ['+', '-', '/', '*']
    
    if (operator !== operators) total = 'unknown value';
    if (operator === '+') total = num1 + num2
    if (operator === '-') total = num1 - num2
    if (operator === '*') total = num1 * num2
    if (operator === '/') total = num1 / num2

    
    return total
    
}