import {useEffect, useState} from 'react'
import UserAnswer from './Components/UserAnswer'
import ProblemGenerator from './Components/ProblemGenerator'
import NumberObject from './Components/NumberObject'
import BgGen from './Components/BgGen'
import './index.css'

function App()
{
    const [userInput, setUserInput] = useState(new NumberObject())
    const [generatedProblem, setGeneratedProblem] = useState({fraction1: new NumberObject(), fraction2: new NumberObject()})
    const [answer, setAnswer] = useState(new NumberObject())
    const [checkAnswer, setCheckAnswer] = useState('')

    useEffect( () => {
        BgGen(100 , document.getElementById('bg'))
        document.getElementById('wholeNumber').focus({preventScroll: true})
    }, [])
    

    const userAnswer = () => {
        const checkMath = userInput.wholeNumber === answer.wholeNumber && userInput.numerator === answer.numerator && userInput.denominator === answer.denominator

        clearChanges()

        if(checkMath) setCheckAnswer('correct')
        else setCheckAnswer('wrong')
    }

    const clearChanges = () => {
        //remove all indications of success or failure
        setCheckAnswer('')
    }

    return (
        <div id='test'>
            <ProblemGenerator  answer={answer} setAnswer={setAnswer} generatedProblem={generatedProblem} setGeneratedProblem={setGeneratedProblem} setUserInput={setUserInput} clearChanges={clearChanges} />
            <UserAnswer userAnswer={userAnswer} answer={userInput} setAnswer={setUserInput} checkAnswer={checkAnswer} clearChanges={clearChanges} />
        </div>
    )
}



export default App;