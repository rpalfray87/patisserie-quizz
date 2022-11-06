import { useContext } from "react"
import { useState } from "react"
import { QuizzContext } from "./QuizzContext"

export default function Result({reponse}) {

    const [toggleReponse, setToggleReponse] = useState(false)
    const quizzContext = useContext(QuizzContext)

    function verifProposition() {
        console.log("reponse : " + reponse + " proposition : " + quizzContext.reponseUser)

        return reponse.toUpperCase() == quizzContext.reponseUser.toUpperCase()
    }

    function handleRetry() {
        quizzContext.setScore([quizzContext.score[0],quizzContext.score[1]+1])
        quizzContext.setReponseUser("")
    }

    function handleGiveResponse() {
        setToggleReponse(true)
    }

    function handleOk() {        
        quizzContext.setScore([quizzContext.score[0],quizzContext.score[1]+1])
        quizzContext.setReponseUser("")
        quizzContext.setCurrentQuestion(quizzContext.selectQuestion())
    }

    function handleContinue() {
        quizzContext.setScore([quizzContext.score[0]+1,quizzContext.score[1]+1])
        quizzContext.setReponseUser("")
        quizzContext.setCurrentQuestion(quizzContext.selectQuestion())
    }

    return (
        <div className="result">
            {verifProposition()
            ? 
            <>
                <h2>Bonne réponse !</h2>
                <div className="container">
                    <button onClick={handleContinue}>Continuer</button>
                </div>
                
            </> 
            : !toggleReponse && quizzContext.reponseUser != "-1" &&
            <>
                <h2>Mauvaise réponse !</h2>
                <div className="container">
                    <button className="secondary" onClick={handleGiveResponse}>Réponse</button>
                    <button onClick={handleRetry}>Réessayer</button>
                </div>
                
            </> }

            { (toggleReponse || quizzContext.reponseUser == "-1") && 
            <>
                <h2>Réponse</h2>
                <p>{reponse}</p>
                <button onClick={handleOk}>Ok</button>
            </>}
        </div>
    )
}