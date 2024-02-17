const divide = (...nums) => {

    if (nums.length < 2) return undefined

    for (let i = 0; i < nums.length; i++) {
        if (!Number.isFinite(nums[i]) || (i > 0 && nums[i] === 0)) {
            return undefined
        }
    }

    
    return [...nums].reduce((a,b) => a / b)
}

divide(0,5,0,1,2,3,4)