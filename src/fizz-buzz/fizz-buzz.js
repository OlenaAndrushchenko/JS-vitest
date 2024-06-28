export function fizzbuzz(num) {

    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0 || num.toString().includes('3')) return 'Fizz'
    if (num % 5 === 0 || num.toString().includes('5')) return 'Buzz'
    
}