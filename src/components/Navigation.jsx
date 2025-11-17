import './Navigation.css';

function Navigation({ onNext, onPrevious, onRandom }) {
  return (
    <div className="navigation">
      <button 
        className="nav-button prev-button" 
        onClick={onPrevious}
        aria-label="Previous prayer point"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="nav-button random-button" 
        onClick={onRandom}
        aria-label="Random prayer point"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="nav-button next-button" 
        onClick={onNext}
        aria-label="Next prayer point"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default Navigation;
