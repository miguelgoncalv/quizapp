
export const quizQuestions_6 = {
  questions: [
    {
      question: 'What is the purpose of the useState hook in React?',
      choices: [
        'To define the initial state of a component',
        'To update the state in class components',
        'To create a stateful function component',
        'To manage the lifecycle of a component',
      ],
      correctAnswer: 'To create a stateful function component',
    },
    {
      question: 'How do you import the useState hook in a functional component?',
      choices: ['import useState from "react"', 'import { useState } from "react"', 'import useStateReact from "react"', 'useState is automatically available in functional components'],
      correctAnswer: 'import { useState } from "react"',
    },
    {
      question: 'What does the useState hook return?',
      choices: ['An array with state and setState', 'The current state value', 'A callback function to update state', 'An object with state and setState'],
      correctAnswer: 'An array with state and setState',
    },
    {
      question: 'How do you use the useState hook to declare state in a functional component?',
      choices: ['const [state, setState] = useState;', 'useState(state, setState);', 'const state = useState();', 'const [state, setState] = useState(initialState);'],
      correctAnswer: 'const [state, setState] = useState(initialState);',
    },
    {
      question: 'In the useState hook, what does the first element of the returned array represent?',
      choices: ['The current state value', 'The initial state value', 'The setState function', 'A boolean indicating whether the component has mounted'],
      correctAnswer: 'The current state value',
    },
    {
      question: 'How can you update the state using the useState hook?',
      choices: [
        'state = newValue',
        'setState(newValue)',
        'setState({ state: newValue })',
        'useState does not support state updates',
      ],
      correctAnswer: 'setState(newValue)',
    },
    {
      question: 'What is the purpose of providing an initial value as an argument to the useState hook?',
      choices: [
        'To define the initial UI rendering',
        'To set the default state value',
        'To improve performance',
        'It is not necessary; useState does not require an initial value',
      ],
      correctAnswer: 'To set the default state value',
    },
    {
      question: 'How do you use the useState hook with an object as the initial state?',
      choices: ['const [state, setState] = useState({});', 'useState(initialStateObject);', 'const [state, setState] = useStateObject({});', 'useStateObject(initialState);'],
      correctAnswer: 'const [state, setState] = useState({});',
    },
    {
      question: 'What is the recommended approach to update state based on the previous state?',
      choices: [
        'Using a separate function for state updates',
        'Directly modifying the current state value',
        'Using the prevState parameter in the setState function',
        'Not updating state based on the previous state',
      ],
      correctAnswer: 'Using the prevState parameter in the setState function',
    },
    {
      question: 'What does the useState hook return when it is called in a functional component?',
      choices: [
        'The current state value and a callback to update state',
        'An object with state and setState',
        'A boolean indicating whether the component has updated',
        'A single value representing the current state',
      ],
      correctAnswer: 'The current state value and a callback to update state',
    },
  ],
}