
export const quizQuestions_8 = {
  questions: [
    {
      question: 'What is the purpose of the ternary operator in JavaScript?',
      choices: [
        'To perform arithmetic operations',
        'To simplify and shorten conditional statements',
        'To concatenate strings',
        'To declare variables',
      ],
      correctAnswer: 'To simplify and shorten conditional statements',
    },
    {
      question: 'What is the syntax of the ternary operator in JavaScript?',
      choices: [
        'if (condition) { trueExpression } else { falseExpression }',
        'condition ? trueExpression : falseExpression',
        'condition ? trueExpression',
        'if (condition) ? trueExpression : falseExpression',
      ],
      correctAnswer: 'condition ? trueExpression : falseExpression',
    },
    {
      question: 'How many expressions can the ternary operator have?',
      choices: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 'Three',
    },
    {
      question: 'What does the nullish coalescing operator (??) do?',
      choices: [
        'It checks if a variable is null or undefined',
        'It combines two strings',
        'It returns the left operand if it is null or undefined; otherwise, it returns the right operand',
        'It converts a value to a boolean',
      ],
      correctAnswer: 'It returns the left operand if it is null or undefined; otherwise, it returns the right operand',
    },
    {
      question: 'How is the nullish coalescing operator different from the logical OR operator (||)?',
      choices: [
        'They are functionally equivalent',
        'The nullish coalescing operator only works with boolean values',
        'The logical OR operator returns the right operand if the left operand is falsy, not just null or undefined',
        'The logical OR operator cannot handle null or undefined values',
      ],
      correctAnswer: 'The logical OR operator returns the right operand if the left operand is falsy, not just null or undefined',
    },
    {
      question: 'In a ternary operator, what happens if the condition is true and the true expression is not provided?',
      choices: [
        'It throws an error',
        'The operator returns undefined',
        'It defaults to true',
        'The operator does not work without both expressions',
      ],
      correctAnswer: 'It defaults to true',
    },
    {
      question: 'What is the result of the expression: `5 > 3 ? "Yes" : "No"`?',
      choices: ['Yes', 'No', 'true', 'false'],
      correctAnswer: 'Yes',
    },
    {
      question: 'How can you use the null coalescing operator to set a default value for a variable?',
      choices: [
        'By using the || operator: `let result = value || defaultValue`',
        'By checking explicitly for null: `let result = value === null ? defaultValue : value`',
        'By using the ?? operator: `let result = value ?? defaultValue`',
        'There is no way to set a default value with the null coalescing operator',
      ],
      correctAnswer: 'By using the ?? operator: `let result = value ?? defaultValue`',
    },
    {
      question: 'What is the purpose of the "truthy" and "falsy" concepts in JavaScript?',
      choices: [
        'To classify values as either true or false',
        'To determine if a variable is undefined',
        'To check if a variable is null',
        'To evaluate values in conditional statements',
      ],
      correctAnswer: 'To evaluate values in conditional statements',
    },
    {
      question: 'Which operator has higher precedence: the ternary operator or the nullish coalescing operator?',
      choices: ['Ternary operator', 'Nullish coalescing operator', 'They have the same precedence', 'Precedence does not matter for these operators'],
      correctAnswer: 'Ternary operator',
    },
  ],
}