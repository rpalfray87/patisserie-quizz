import { useState } from "react";

import { QuizzContext } from "./QuizzContext";
import data from '../assets/data.json'
import Quizz from "./Quizz";
import Result from "./Result";
import InfosBar from "./InfosBar";

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
            <header>
                        <h1>Pâtisserie Quizz</h1>
            </header>
            { reponseUser == "" ?
                <div className="patisserieQuizz">
                    
                    <div className="container">
                        <InfosBar score={score} reset={reset} />
                        <Quizz definition={currentQuestion}/>
                    </div>
                    
                </div> 
                : 
                <Result reponse={currentQuestion.name} proposition={reponseUser} />
            }
            <footer>By roudoudou</footer>
        </QuizzContext.Provider>
    )
}