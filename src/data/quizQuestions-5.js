
export const quizQuestions_5 = {
  questions: [
    {
      question: 'What is the primary purpose of state in a React component?',
      choices: [
        'To store and manage component data that may change over time',
        'To define static properties for the component',
        'To manage the layout and styles of the component',
        'To determine the component hierarchy',
      ],
      correctAnswer: 'To store and manage component data that may change over time',
    },
    {
      question: 'Which method is used to initialize state in a class component?',
      choices: ['initState()', 'setupState()', 'constructor()', 'stateInit()'],
      correctAnswer: 'constructor()',
    },
    {
      question: 'In a functional component, how do you declare state?',
      choices: ['Using the useState hook', 'By defining a state() function', 'With the setState() method', 'State is only available in class components'],
      correctAnswer: 'Using the useState hook',
    },
    {
      question: 'How do you update the state in a class component?',
      choices: ['Using the setState() method', 'Directly modifying the state object', 'By calling the stateUpdate() function', 'State is immutable and cannot be changed'],
      correctAnswer: 'Using the setState() method',
    },
    {
      question: 'What is the key difference between props and state in React?',
      choices: [
        'Props are immutable, while state can be changed',
        'Props are used only in functional components, while state is used in class components',
        'State is passed from parent to child, while props are managed within a component',
        'Props and state are interchangeable and can be used in the same way',
      ],
      correctAnswer: 'Props are immutable, while state can be changed',
    },
    {
      question: 'How do you access the current state value in a functional component using the useState hook?',
      choices: ['state.current', 'this.state.current', 'state', 'currentState'],
      correctAnswer: 'state',
    },
    {
      question: 'What is the purpose of the "setState" function in React?',
      choices: [
        'To define the initial state of a component',
        'To update the state and trigger a re-render',
        'To create a new state object',
        'To set the state asynchronously',
      ],
      correctAnswer: 'To update the state and trigger a re-render',
    },
    {
      question: 'What is the difference between the state in a class component and the state in a functional component with the useState hook?',
      choices: [
        'There is no difference, and they can be used interchangeably',
        'Class component state can hold more complex data structures',
        'Functional component state is only accessible within the component',
        'Functional component state is always asynchronous',
      ],
      correctAnswer: 'Class component state can hold more complex data structures',
    },
    {
      question: 'When using the useState hook, what is returned as the first element of the array?',
      choices: ['Current state value', 'setState function', 'An object with state and setState', 'Initial state value'],
      correctAnswer: 'Current state value',
    },
    {
      question: 'What can cause a memory leak in a React application related to state?',
      choices: [
        'Not using the state at all',
        'Setting state in an async callback without proper cleanup',
        'Avoiding the use of useEffect',
        'Using state only in class components',
      ],
      correctAnswer: 'Setting state in an async callback without proper cleanup',
    },
  ],
}