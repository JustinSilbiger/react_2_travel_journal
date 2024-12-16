import globe from '../assets/globe.png'

export default function Header() {
    const hours = new Date().getHours()
    let greeting

    if (hours < 12) {greeting = "morning"}
    else if (hours >= 12 && hours < 17) {greeting = "afternoon"}
    else if (hours < 21) {greeting = "evening"}
    else {greeting = "night"}

    return(
        <header className="header">
            <div className="header-top">
                <div className="header-text">Justin's</div>
                <img src={globe} className="header-globe" alt="globe icon" />
                <div className="header-text">Journey</div>
            </div>
            <div className="header-welcome">Good {greeting}!</div>
        </header>
    )
}
