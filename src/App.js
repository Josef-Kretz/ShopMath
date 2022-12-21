import {useState} from 'react'
import UserAnswer from './Components/UserAnswer'
import ProblemGenerator from './Components/ProblemGenerator'
import NumberObject from './Components/NumberObject'
import './index.css'

function App()
{
    const [userInput, setUserInput] = useState(new NumberObject())
    const [generatedProblem, setGeneratedProblem] = useState({fraction1: new NumberObject(), fraction2: new NumberObject()})
    const [answer, setAnswer] = useState(new NumberObject())

    const userAnswer = () => {
        const checkMath = userInput.wholeNumber === answer.wholeNumber && userInput.numerator === answer.numerator && userInput.denominator === answer.denominator

        console.log(checkMath)
    }

    return (
        <div>
            <ProblemGenerator  answer={answer} setAnswer={setAnswer} generatedProblem={generatedProblem} setGeneratedProblem={setGeneratedProblem} setUserInput={setUserInput} />
            <UserAnswer userAnswer={userAnswer} answer={userInput} setAnswer={setUserInput} />
        </div>
    )
}

export default App;