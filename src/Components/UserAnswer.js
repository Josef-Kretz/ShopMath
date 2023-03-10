const UserAnswer = ({ userAnswer, answer, setAnswer, checkAnswer, clearChanges }) => {

    const onSubmit = (e) => {
        e.preventDefault()

        if(answer.numerator > answer.denominator) return

        if(checkAnswer === 'correct') {
            clearChanges()
            document.getElementById('fraction-con').requestSubmit() //generates a new problem
        }
        else userAnswer()
    }

    return ( //returns the form so user can give an answer
        <form onSubmit={onSubmit} id='userAnswer' className={checkAnswer}>
            <input 
                inputMode='numeric'
                min='0'
                className='wholeNumber'
                id='wholeNumber'
                value={answer.wholeNumber||''}
                onChange={ ({target : { value}}) => isNaN(+value)||setAnswer({...answer, wholeNumber: +value})}
                autoComplete='off'
            />
            <input 
                inputMode='numeric'
                min='0'
                className='numerator'
                id='numerator'
                value={answer.numerator||''}
                onChange={ ({target : { value}}) => isNaN(+value)||setAnswer({...answer, numerator: +value})}
                autoComplete='off'
            />
            <input 
                inputMode='numeric'
                min='0'
                className='denominator'
                id='denominator'
                value={answer.denominator||''}
                onChange={ ({target : { value}}) => isNaN(+value)||setAnswer({...answer, denominator: +value})}
                autoComplete='off'
            />
            <input type='submit' id='answerButton' value='Give Answer' />
        </form>
    )
}

export default UserAnswer