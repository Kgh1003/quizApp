import { useState, useRef, useEffect,} from "react";
import "./Quiz.css";
import { questions } from "../../assets/data";

const Quiz = () => {
    let [quiz, showQuiz] = useState(false);
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(questions[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [showScore, setShowScore] = useState(false);
    const timeLimit = 30; // 30 seconds
    const [timeLeft, setTimeLeft] = useState(timeLimit);

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let optionArray = [option1, option2, option3, option4];

useEffect(() => {
    if (!quiz || lock || showScore) return; // Don't start timer if quiz is not started, answer is locked, or score is shown

    const id = setTimeout(() => {
        if (timeLeft <= 1) {
            setTimeLeft(0);
            setLock(true);
            const options = [option1, option2, option3, option4];
            options[question.ans - 1].current.classList.add("correct");
        } else {
            setTimeLeft(timeLeft - 1);
        }
        }, 1000);

        return () => clearTimeout(id); // Cleanup the timeout on component unmount or when dependencies change
    }, [timeLeft, quiz, lock, showScore, question.ans]);

    const checkAnswer = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
            e.target.classList.add("correct");
            setLock(true);
            setScore((currentScore) => currentScore + 1);
        }
        else {
            e.target.classList.add("incorrect");
            setLock(true);
            optionArray[question.ans - 1].current.classList.add("correct");
        }
        }
        
    };

    const next = () => {
        if (lock === true) {
            if (index === questions.length - 1) {
                setShowScore(true);
                return 0;
            }
        
            setIndex(++index);
            setQuestion(questions[index]);
            setLock(false);
            setTimeLeft(timeLimit);
            optionArray.forEach((option) => {
                option.current.classList.remove("correct");
                option.current.classList.remove("incorrect");
                return null;
            });
        }
    }        

    const reset = () => {
        showQuiz(false);
        setIndex(0);
        setQuestion(questions[0]);
        setLock(false);
        setScore(0);
        setShowScore(false);
        setTimeLeft(timeLimit);
    }

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {!quiz ? (
                <>
                    <h2>Welcome to my Quiz App!</h2>
                    <p>Test your knowledge with my interactive quiz. Click the button below to start the quiz and challenge yourself on your JSON knowledge!</p>
                    <button onClick={() => showQuiz(true)}>Start Quiz</button>
                </>
            ) : (<>
            {showScore ? (
                <>
                <h2 className="score">Score: {score} / {questions.length}</h2>
                <button onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <div className="timer">Time Remaining: {timeLeft} seconds</div>
                    <ul>
                        <li ref={option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                        <li ref={option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
                        <li ref={option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                        <li ref={option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>
                        {index === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                    <div className="index">{index + 1} of {questions.length} questions   
                    </div>
                </>
            )}
            </>)}
            
            
        </div>
    );
};

export default Quiz;