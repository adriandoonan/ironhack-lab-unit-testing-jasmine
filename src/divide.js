const divide = (...nums) => {

    if (nums.length < 2) return undefined

    for (const element of nums) {
        if (!Number.isFinite(element)) {
            return undefined
        }
    }
    
    return [...nums].reduce((a,b) => a / b)
}

divide(3,Infinity)