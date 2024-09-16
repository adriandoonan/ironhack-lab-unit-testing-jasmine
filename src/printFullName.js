function isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
  }

function printFullName(nameObject) {

    if (!isObject(nameObject)) return undefined

    const {firstName, lastName} = nameObject

    if (!firstName || !lastName) return undefined

    if (typeof firstName !== 'string' || typeof lastName !== 'string') return undefined
    
    return `${firstName.trim()} ${lastName.trim()}`
}

// printFullName({firstName: '  😾  ', lastName: '  angry Cat!  '})

// printFullName.length

// The function should be defined.
// The function should take one argument of type object. The object should have two properties: firstName and lastName.
// The function should return a string with the first name and the last name separated by a space.
// In case the argument passed is not an object, the function should return undefined.
// In case the firstName or lastName properties are not provided, the function should return undefined.
// In case one is empty string?