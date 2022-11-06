import { useState } from "react";

import { QuizzContext } from "./QuizzContext";
import data from '../assets/data.json'
import Quizz from "./Quizz";
import Result from "./Result";

export default function PatisserieQuizz() {
    
    const [score, setScore] = useState([0,0])
    const [reponseUser, setReponseUser] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(selectQuestion())

    function selectQuestion() {
        let random = Math.floor(Math.random()*data.length)
        return data[random]
    }

    function reset() {
        setScore([0,0])
    }

    return (
        <QuizzContext.Provider value={{reponseUser, setReponseUser, score, setScore, selectQuestion, setCurrentQuestion}}>
            { reponseUser == "" ?
                <div className="patisserieQuizz">
                    <header>
                        <h1>Pâtisserie Quizz</h1>
                        <p>Bonne réponse sur : {score[0]}/{score[1]}</p>
                        <button onClick={reset}>Reset</button>
                    </header>
                    <Quizz definition={currentQuestion}/>
                    <footer>By roudoudou</footer>
                </div> 
                : 
                <Result reponse={currentQuestion.name} proposition={reponseUser} />
            }
            
        </QuizzContext.Provider>
    )
}