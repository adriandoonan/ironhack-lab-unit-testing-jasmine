const sumArrayNumbers = arrayOfNumbers => {
    if (!Array.isArray(arrayOfNumbers)) return undefined
    if (arrayOfNumbers.some(element => !Number.isFinite(element))) return undefined

    return arrayOfNumbers.reduce((a,b) => a + b, 0)
}

// The function should be defined.
// The function should take one argument of type array. The array should contain numbers.
// The function should return the sum of all numbers in the array.
// In case the argument passed is not an array, the function should return undefined.
// In case the argument passed is an empty array, the function should return 0.
