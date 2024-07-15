// Step 1: Questions
export const questions = [
    {
        question: "How do you perform explicit casting in TypeScript?",
        options: [
            "Using the as keyword",
            "Using the is keyword",
            "Using the typeof keyword",
            "Using the instanceof keyword"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a way to perform type casting in TypeScript?",
        options: [
            "Using as syntax",
            "Using <> syntax",
            "Both as and <> syntax",
            "Neither as nor <> syntax"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the syntax for type casting using the as keyword?",
        options: [
            "let variable: Type = value;",
            "let variable = Type(value);",
            "let variable = cast Type value;",
            "let variable = value as Type;",
        ],
        correctAnswer: 3
    },
    {
        question: "What is an enum in TypeScript?",
        options: [
            "A function that returns a unique identifier",
            "A variable that stores a list of strings",
            "A type that allows a variable to be one of several predefined values or group of constants",
            "A data structure that allows for key-value pairs"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you define an enum in TypeScript?",
        options: [
            "enum Color { Red, Green, Blue }",
            "let Color = enum { Red, Green, Blue }",
            "const Color = enum { Red, Green, Blue }",
            "enum = { Red, Green, Blue }"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the default value of the first member of an enum in TypeScript?",
        options: [
            "0",
            "1",
            "undefined",
            "null"
        ],
        correctAnswer: 0
    },
    {
        question: "How can you assign custom values to enum members?",
        options: [
            "enum Color { Red: 1, Green: 2, Blue: 4 }",
            "enum Color { Red == 1, Green == 2, Blue == 4 }",
            "enum Color { Red = 1, Green = 2, Blue = 4 }",
            "enum Color { Red => 1, Green => 2, Blue => 4 }"
        ],
        correctAnswer: 2
    },
    {
        question: "What are const enums in TypeScript?",
        options: [
            "Enums that cannot be changed once defined",
            "Enums that are declared inside a constant",
            "Enums that only contain constant values",
            "Enums that are fully inlined and removed during compilation"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you define a const enum in TypeScript?",
        options: [
            "const enum Color { Red, Green, Blue }",
            "enum const Color { Red, Green, Blue }",
            "enum Color = const { Red, Green, Blue }",
            "const Color = enum { Red, Green, Blue }"
        ],
        correctAnswer: 0
    },
    {
        question: "What is reverse mapping in TypeScript enums?",
        options: [
            "A method to find the previous value in an enum",
            "A way to map enum values back to their names",
            "A technique to reverse the order of enum members",
            "A function that changes enum values"
        ],
        correctAnswer: 1
    },
    {
        question: "How can you perform reverse mapping with enums?",
        options: [
            "By accessing the enum with the value",
            "By using a reverse() function",
            "By defining a reverse map",
            "By iterating over the enum members"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a TypeScript data type?",
        options: [
            "string",
            "number",
            "boolean",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you define a variable with a specific type in TypeScript?",
        options: [
            "let variable: Type;",
            "let variable = Type;",
            "variable: Type = value;",
            "Type variable = value;"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the syntax for declaring a variable of type 'any' in TypeScript?",
        options: [
            "let any variable;",
            "variable: any = value;",
            "let variable: any;",
            "let variable = any;"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'never' type in TypeScript?",
        options: [
            "To represent any type of value",
            "To represent values that never occur",
            "To represent a nullable type",
            "To represent an undefined value"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you define a union type in TypeScript?",
        options: [
            "let variable: Type1 | Type2;",
            "let variable: Type1 & Type2;",
            "let variable = Type1 | Type2;",
            "let variable = Type1 & Type2;"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the syntax for defining a string enum in TypeScript?",
        options: [
            "enum Color { Red: 'Red', Green: 'Green', Blue: 'Blue' }",
            "enum Color { Red => 'Red', Green => 'Green', Blue => 'Blue' }",
            "enum Color { Red = 'Red', Green = 'Green', Blue = 'Blue' }",
            "enum Color = { Red: 'Red', Green: 'Green', Blue: 'Blue' }"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you declare a tuple type in TypeScript?",
        options: [
            "let tuple = [Type1, Type2];",
            "let tuple: [Type1, Type2];",
            "tuple: [Type1, Type2] = value;",
            "let tuple: Tuple<Type1, Type2>;"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to define an enum with custom string values?",
        options: [
            "enum Direction { Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT' }",
            "enum Direction { 'UP' = 'Up', 'DOWN' = 'Down', 'LEFT' = 'Left', 'RIGHT' = 'Right' }",
            "enum Direction { 'Up', 'Down', 'Left', 'Right' }",
            "enum Direction = { Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT' }"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the 'unknown' type represent in TypeScript?",
        options: [
            "A type that represents null and undefined",
            "A type that represents any primitive type",
            "A type-safe counterpart of 'any'",
            "A type that is used for variables with known values"
        ],
        correctAnswer: 2
    },
    {
        question: "How can you cast a variable from 'unknown' to a specific type?",
        options: [
            "Using the 'as' keyword",
            "Using the 'unknown' keyword",
            "Using the 'typeof' keyword",
            "Using the 'instanceof' keyword"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the difference between 'const enum' and 'enum' in TypeScript?",
        options: [
            "'const enum' cannot be reverse mapped, while 'enum' can",
            "'const enum' is fully inlined during compilation, while 'enum' is not",
            "'const enum' only works with string values, while 'enum' works with numbers",
            "'const enum' does not support custom values, while 'enum' does"
        ],
        correctAnswer: 2
    },
    {
        question: "How can you perform type assertions in TypeScript?",
        options: [
            "Using the 'as' keyword or angle-bracket syntax",
            "Using the 'assert' keyword or angle-bracket syntax",
            "Using the 'assert' keyword or 'typeof' keyword",
            "Using the 'as' keyword or 'typeof' keyword"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the use of type casting in TypeScript?",
        options: [
            "To declare a variable with a specific type",
            "To define custom types",
            "To check the type of a variable",
            "To convert a variable from one type to another"
        ],
        correctAnswer: 3
    },
    {
        question: "What is an 'enum' in TypeScript primarily used for?",
        options: [
            "Defining a set of named constants",
            "Creating classes with predefined properties",
            "Implementing generic types",
            "Declaring variables with multiple types"
        ],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to access enum values in TypeScript?",
        options: [
            "enum",
            "value",
            "this",
            "enumValue"
        ],
        correctAnswer: 3
    },
    {
        question: "How can you iterate over enum values in TypeScript?",
        options: [
            "Using enum.forEach()",
            "Using a for...in loop",
            "Using Object.values()",
            "Enums cannot be iterated over"
        ],
        correctAnswer: 2
    },
    {
        question: "What happens if you assign a numeric value to a string enum member in TypeScript?",
        options: [
            "It throws a compilation error",
            "The member will convert to a number",
            "It assigns a default string value to the member",
            "It depends on the compiler settings"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is true about string enums in TypeScript?",
        options: [
            "They support reverse mapping by default",
            "They can only store string values",
            "They cannot be used as keys in objects",
            "They are less performant than numeric enums"
        ],
        correctAnswer: 0
    },
    {
        question: "What does a const enum do during compilation?",
        options: [
            "It removes the enum declaration entirely",
            "It inlines only the const members",
            "It generates a warning in the console",
            "It replaces all references with the actual values"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you use enums to define object keys in TypeScript?",
        options: [
            "By creating an array of enum keys",
            "By using enums as object keys directly",
            "By converting enums to string values",
            "Enums cannot be used as object keys"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main advantage of using enums over plain strings or numbers?",
        options: [
            "Enums can be used in calculations",
            "Enums are easier to define than plain values",
            "Enums provide meaningful names for values",
            "Enums consume less memory than plain values"
        ],
        correctAnswer: 2
    },
    {
        question: "Which TypeScript feature works best with enums for type safety?",
        options: [
            "Union types",
            "Any types",
            "Void types",
            "Never types"
        ],
        correctAnswer: 0
    },
    {
        question: "In which scenario would you use a const enum over a regular enum?",
        options: [
            "When you need to define custom values for each member",
            "When you want the enum values to be inlined",
            "When you want to iterate over enum values",
            "When you want to use enums as object keys"
        ],
        correctAnswer: 1
    },
    // Array and it's methods
    {
        question: "What is the correct way to declare an array of numbers in TypeScript?",
        options: [
            "let numbers: Array;",
            "let numbers: number[10];",
            "let numbers: number[];",
            "let numbers = number[];"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you initialize an array with specific values in TypeScript?",
        options: [
            "let colors: string = ['red', 'green', 'blue'];",
            "let colors: string[] = ['red', 'green', 'blue'];",
            "let colors: string[] = 'red', 'green', 'blue';",
            "let colors: string[] = ('red', 'green', 'blue');"
        ],
        correctAnswer: 1
    },
    {
        question: "What method can you use to add an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correctAnswer: 0
    },
    {
        question: "Which method removes the last element from an array?",
        options: [
            "push()",
            "shift()",
            "pop()",
            "unshift()"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you remove the first element from an array?",
        options: [
            "unshift()",
            "shift()",
            "pop()",
            "slice()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method adds one or more elements to the beginning of an array?",
        options: [
            "shift()",
            "push()",
            "splice()",
            "unshift()",
        ],
        correctAnswer: 3
    },
    {
        question: "What does the array method map() do?",
        options: [
            "Executes a provided function once for each array element",
            "Creates a new array populated with the results of calling a provided function on every element in the array",
            "Creates a new array with all elements that pass the test implemented by the provided function",
            "Sorts the elements of an array in place"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method returns a new array with all elements that pass the test implemented by the provided function?",
        options: [
            "map()",
            "reduce()",
            "filter()",
            "forEach()"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the reduce() method do?",
        options: [
            "Reduces the size of the array",
            "Filters the elements of an array",
            "Maps the elements of an array",
            "Executes a reducer function on each element of the array, resulting in a single output value",
        ],
        correctAnswer: 3
    },
    {
        question: "Which method can be used to merge two or more arrays?",
        options: [
            "concat()",
            "join()",
            "push()",
            "merge()"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you sort the elements of an array?",
        options: [
            "order()",
            "sort()",
            "arrange()",
            "filter()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method creates a new array with a portion of the original array?",
        options: [
            "splice()",
            "split()",
            "slice()",
            "filter()"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the splice() method do?",
        options: [
            "Creates a new array with a portion of the original array",
            "Splits a string into an array of substrings",
            "Changes the contents of an array by removing or replacing existing elements and/or adding new elements",
            "Sorts the elements of an array"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you find the index of a specific element in an array?",
        options: [
            "find()",
            "indexOf()",
            "search()",
            "locate()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method tests whether at least one element in the array passes the test implemented by the provided function?",
        options: [
            "every()",
            "find()",
            "some()",
            "filter()"
        ],
        correctAnswer: 2
    },
    // Functions and optional parameter
    {
        question: "What is the syntax to declare a function in TypeScript?",
        options: [
            "function functionName() {}",
            "let functionName() = {}",
            "const functionName = function() {}",
            "functionName: function() {}"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you specify optional parameters in a TypeScript function?",
        options: [
            "Use square brackets ([]) around the parameter",
            "Use the 'optional' keyword before the parameter",
            "Use the 'null' keyword after the parameter",
            "Use a question mark (?) after the parameter name"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the default return type of a TypeScript function?",
        options: [
            "null",
            "undefined",
            "void",
            "any"
        ],
        correctAnswer: 2
    },
    {
        question: "How can you define default parameter values in a TypeScript function?",
        options: [
            "function testFunction(param1: number, param2 = 'default') {}",
            "function testFunction(param1: number, param2: string = 'default') {}",
            "function testFunction(param1 = number, param2 = 'default') {}",
            "function testFunction(param1: number, param2?: string = 'default') {}"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the void keyword indicate in a TypeScript function?",
        options: [
            "The function can return any type of value",
            "The function returns undefined",
            "The function does not return any value",
            "The function returns null"
        ],
        correctAnswer: 2
    },
    {
        question: "Which TypeScript feature allows you to use functions without specifying their return types?",
        options: [
            "Type inference",
            "Type assertion",
            "Type casting",
            "Type narrowing"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the => arrow symbol indicate in TypeScript function syntax?",
        options: [
            "It separates parameters and return type",
            "It separates function name and function body",
            "It denotes a function expression",
            "It denotes a function type"
        ],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to define function types in TypeScript?",
        options: [
            "function",
            "type",
            "def",
            "func"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you specify a function type that accepts a callback with optional parameters?",
        options: [
            "(param1: number, param2: string?) => void",
            "(param1: number, param2?: string) => null",
            "(param1: number, param2?: string) => void",
            "(param1: number, param2: string?) => null"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the ...args: any[] syntax represent in TypeScript function parameters?",
        options: [
            "Rest parameters to capture all remaining arguments as an array",
            "Optional parameters to specify variable argument count",
            "Default parameters to specify optional arguments",
            "Type assertion for function arguments"
        ],
        correctAnswer: 0
    },
    {
        question: "Who created TypeScript and JavaScript?",
        options: [
            "Ryan Dahl and John Resig",
            "Guido van Rossum and James Gosling",
            "Anders Hejlsberg and Brendan Eich",
            "Yukihiro Matsumoto and Linus Torvalds"
        ],
        correctAnswer: 2
    }
];

// Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll("#question, option_1, option_2, option_3, option_4 ");

const submitBtn = document.querySelector("#submit");
const viewAnswersBtn = document.querySelector("#view-answers");

let currentQuiz = 0;
let score = 0;
let userAnswers = [];

// Step 3: Load Quiz function
const loadQuiz = () => {
    const {question, options} = questions[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Step 4: Get selected answer function on button click
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElement) => curElement.checked );
};

const deselectedAnswer = () => {
    answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    userAnswers.push(selectedOptionIndex);

    if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++; 
    deselectedAnswer();
    if (currentQuiz < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result">
        <h2>🏆🥇 Your Score: ${score}/${questions.length} Correct Answers</h2>
        <P>🎊✨ Congratulations on completing the quiz!</p>
        <p>Don't lose hope and never give up! You can do it 💪🏻</p>
        <button class = "reload-button" onclick = "window.location.reload()">Restart</button>
        <button id="view-answers-btn">View Answers</button>
        </div>`;
        document.querySelector("#view-answers-btn").addEventListener("click", () => {
            displayAnswers();
        });
    }
});

const displayAnswers = () => {
    let answerHTML = `<div class="result view-answers"><h2>Correct Answers</h2>`;
    questions.forEach((question, index) => {
        answerHTML += `<p>Q${index + 1}: ${question.question}</p>`;
        answerHTML += `<p>Your answer: ${question.options[userAnswers[index]]}</p>`;
        answerHTML += `<p>Correct answer: ${question.options[question.correctAnswer]}</p><hr>`;
    });
    answerHTML += `<button class="reload-button" onclick="window.location.reload()">Restart</button></div>`;
    quiz.innerHTML = answerHTML;
};