export function arrSum(arr1, arr2) { 
    const sum = arr1.concat(arr2).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum;
}