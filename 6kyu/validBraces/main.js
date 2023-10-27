function validBraces(braces) {
    let stack = []
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    // Iterate through each character in the input string.
    for (let i = 0; i < braces.length; i++) {
        //if opening brace
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            // Push the opening brace onto the stack.
            stack.push(braces[i])
        //if the top element of the stack matches the corresponding opening brace according to the map
        } else if (stack[stack.length - 1] === map[braces[i]]) {
            // Pop the matching opening brace from the stack.
            stack.pop()
        } else {
            // If the current character is a closing brace that doesn't match the opening brace on the stack, return false.
            return false
        }
    }

    //if stack is empty, return true. else false
    return !stack.length
}