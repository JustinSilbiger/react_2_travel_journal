import marker from '../assets/marker.png'
import cordoba from '../assets/cordoba.jpg'
import barcelona from '../assets/barcelona.jpg'
import madrid from '../assets/madrid.jpg'

export default function Entry() {
  return (
    <div className="entry-container">
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={cordoba}
                    alt="Cordoba" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">Spain</span>
                <a href="https://maps.app.goo.gl/gJySihPPRL1bC3or9" className="maps-link">View on Google Maps</a>
                <h2 className="entry-title">Cordoba</h2>
                <p className="trip-dates">August 2024</p>
                <p className="entry-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </article>

        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={barcelona}
                    alt="Barcelona" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">Spain</span>
                <a href="https://maps.app.goo.gl/gJySihPPRL1bC3or9" className="maps-link">View on Google Maps</a>
                <h2 className="entry-title">Barcelona</h2>
                <p className="trip-dates">August 2024</p>
                <p className="entry-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </article>

        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={madrid}
                    alt="Madrid" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">Spain</span>
                <a href="https://maps.app.goo.gl/gJySihPPRL1bC3or9" className="maps-link">View on Google Maps</a>
                <h2 className="entry-title">Madrid</h2>
                <p className="trip-dates">August 2024</p>
                <p className="entry-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </article>
    </div>
  )
}