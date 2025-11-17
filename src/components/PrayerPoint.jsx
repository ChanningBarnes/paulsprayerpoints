import './PrayerPoint.css';

function PrayerPoint({ prayerPoint, fadeIn }) {
  const { text, reference } = prayerPoint;
  
  // Create BibleGateway link
  const createBibleLink = (ref) => {
    const encoded = encodeURIComponent(ref);
    return `https://www.biblegateway.com/passage/?search=${encoded}&version=ESV`;
  };

  return (
    <div className={`prayer-point-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
      <div className="prayer-point">
        <p className="prayer-text">{text}</p>
        <div className="reference-container">
          <a 
            href={createBibleLink(reference)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bible-reference"
          >
            {reference} ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrayerPoint;
