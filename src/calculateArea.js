function calculateArea(length,width) {
    
    if (!Number.isFinite(length) || !Number.isFinite(width) || arguments.length < 2) {
        return undefined
    }

    return length * width
}
