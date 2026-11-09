export const questions = [
    {
    question: "Which of the following is invalid in strict JSON syntax?",
    option1: "Property keys must be enclosed in double quotes.",
    option2: "Single quotes can be used around string values.",
    option3: "Nested arrays and objects are permitted as values.",
    option4: "Boolean values must be written in lowercase.",
    ans: 2
    },
    {
    question: "Which of the following native JavaScript data types is not supported directly in JSON and will be altered or lost during serialization?",
    option1: "null",
    option2: "Boolean",
    option3: "Date",
    option4: "Array",
    ans: 3
    },
    {
    question: "Why is using JavaScript's eval() to parse a JSON string generally discouraged compared to JSON.parse()?",
    option1: "eval() executes any arbitrary JavaScript code embedded inside the string payload, posing a severe security risk.",
    option2: "eval() is significantly slower and cannot parse arrays.",
    option3: "eval() automatically converts all numbers into BigInt types.",
    option4: "eval() throws an exception on deeply nested JSON structures.",
    ans: 1
    },
    {
    question: "In JavaScript, what happens when you pass an object containing a property with the value undefined or a Function to JSON.stringify()?",
    option1: "It throws a SyntaxError.",
    option2: "It converts them to null.",
    option3: "It serializes them as the string 'undefined' or 'function'.",
    option4: "It omits the property/key entirely from the resulting JSON string.",
    ans: 4
    },
    {
    question: "What happens when you attempt to run JSON.stringify() on a JavaScript object that contains circular references?",
    option1: "It automatically replaces the circular reference with the string '[Circular]'.",
    option2: "It enters an infinite loop until the JavaScript call stack overflows.",
    option3: "It throws a TypeError indicating that a circular structure cannot be converted to JSON.",
    option4: "It silently truncates the reference to null.",
    ans: 3
    }
]  