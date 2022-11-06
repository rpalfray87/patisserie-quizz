import ReponseBar from "./ReponseBar";

export default function Quizz({definition}) {
    return (
        <div className="quizz">
            <h2>Définition : </h2>
            <p className="definition">{definition.def}</p>
            <ReponseBar definition={definition} />
        </div>
    )
}