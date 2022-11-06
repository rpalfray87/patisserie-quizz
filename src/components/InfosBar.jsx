export default function InfosBar({score, reset}) {
    return (
        <div className="infosBar">
            <p>Score : {score[0]}/{score[1]}</p>
            <i>
                <span onClick={reset} class="material-symbols-outlined icon-button">
                    restart_alt
                </span>
            </i>
                
        </div>
    )
}