import { useContext, useState } from "react"
import { QuizzContext } from './QuizzContext'


export default function ReponseBar({definition}) {

    const [toggleResult, setToggleResult] = useState(false)
    const [reponseUser, setReponseUser] = useState("")

    const quizzContext = useContext(QuizzContext)

    function handleValidation(e) {
        e.preventDefault()
        if (reponseUser != "") {
            quizzContext.setReponseUser(reponseUser) 
        }
    }

    function handleJCP(e) {
        console.log("Je suis passé par ici")
        e.preventDefault()
        quizzContext.setReponseUser("-1")
    }

    function handleKey(e) {
        e.key == "Enter" && handleValidation(e)
    }


    return (
        <>
            <div className="reponseBar">
                <input placeholder="Entrer votre réponse ici..." onKeyDown={(e) => handleKey(e)} type="text" name="nom" id="nom" value={reponseUser} onChange={(e) => setReponseUser(e.target.value)} />
                <div className="container">
                    <button className="secondary" onClick={(e) => handleJCP(e)}>Je ne sais pas</button>
                    <button className="primary" onClick={(e) => handleValidation(e)}>Valider</button>
                </div>
                
            </div>
        </>
        
    )
}