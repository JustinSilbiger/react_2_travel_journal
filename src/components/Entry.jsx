import marker from '../assets/marker.png'


export default function Card({ data }) {
    return(
        
            <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={data.img}
                    alt="Cordoba" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">{data.country}</span>
                <a href={data.mapsLink} className="maps-link">View on Google Maps</a>
                <h2 className="entry-title">{data.title}</h2>
                <p className="trip-dates">{data.dates}</p>
                <p className="entry-text">{data.text}</p>
            </div>
        </article>
    )
}