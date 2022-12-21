import NumberObject from './NumberObject'

const ProblemGenerator = ({answer, setAnswer, generatedProblem, setGeneratedProblem, setUserInput}) => {
    let {fraction1, fraction2} = generatedProblem

    const makeMath = (e) => {
        e.preventDefault()

        setUserInput(new NumberObject())

        let diff = +e.target.elements.difficulty.value //gets user selected value 4,8,16, or 32

        //generates 2 random numbers for fraction based math
        let num1 = Math.floor(Math.random()*24) + (Math.floor(Math.random()*diff))/diff
        let num2 = Math.floor(Math.random()*24) + (Math.floor(Math.random()*diff))/diff

        if(num1 > num2){
            setAnswer(new NumberObject(num1-num2))
            e.target.elements.operation.value = '-'
        }
        else{
            setAnswer( new NumberObject(num1+num2))
            e.target.elements.operation.value = '+'
        }

        setGeneratedProblem({fraction1: new NumberObject(num1), fraction2: new NumberObject(num2)})

    }

    const showAnswer = () => {
        setUserInput(answer)
    }

    return (
        <form onSubmit={makeMath}>
            <label htmlFor='difficulty-ddl'>Select difficulty:</label>
            <select defaultValue='16' name='difficulty' id='difficulty-ddl'>
                <option value='4'>⅟₄</option>
                <option value='8'>⅟₈</option>
                <option value='16'>⅟₁₆</option>
                <option value='32'>⅟₃₂</option>
            </select>
            <section id='fraction1'>
                <input type='text' className='wholeNumber' value={fraction1.wholeNumber||''} disabled />
                <input type='text' className='numerator' value={fraction1.numerator||''} disabled />
                <input type='text' className='denominator' value={fraction1.denominator||''} disabled />
            </section>
            <section id='op-con'>
                <input type='text' id='operation' />
            </section>
            <section id='fraction2'>
                <input type='text' className='wholeNumber' value={fraction2.wholeNumber||''} disabled />
                <input type='text' className='numerator' value={fraction2.numerator||''} disabled />
                <input type='text' className='denominator' value={fraction2.denominator||''} disabled />
            </section>
        <input type='submit' value='Generate Problem' />
        <input type='button' onClick={showAnswer} value='Show Answer' />
        </form>
    )
}

export default ProblemGenerator