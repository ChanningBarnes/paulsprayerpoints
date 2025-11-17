import { useState, useEffect } from 'react';
import './App.css';
import PrayerPoint from './components/PrayerPoint';
import Navigation from './components/Navigation';

const prayerPoints = [
  {
    text: "Thanking God for the Christian faith being proclaimed worldwide",
    reference: "Romans 1:8"
  },
  {
    text: "Thanking God that those who were once slaves of sin have become obedient from the heart",
    reference: "Romans 6:17"
  },
  {
    text: "Thanking God for deliverance from the captivity of sin",
    reference: "Romans 7:24-25"
  },
  {
    text: "From God, and through God, and to God are all things. To God be the glory",
    reference: "Romans 11:36"
  },
  {
    text: "That God will help us to live in harmony with one another and glorify God with one another",
    reference: "Romans 15:5-6"
  },
  {
    text: "That God will fill believers with all joy and peace in believing, so that by the power of the Holy Spirit they may abound in hope",
    reference: "Romans 15:13"
  },
  {
    text: "That the God of peace will be with believers",
    reference: "Romans 15:33"
  },
  {
    text: "Thanking God for bestowing His grace on believers in Christ Jesus",
    reference: "1 Corinthians 1:4"
  },
  {
    text: "Thanking God for giving us victory over sin and death through Jesus Christ",
    reference: "1 Corinthians 15:57"
  },
  {
    text: "Deliverance from affliction and persecution",
    reference: "2 Corinthians 1:11"
  },
  {
    text: "That believers will do what is right and avoid what is wrong",
    reference: "2 Corinthians 13:7"
  },
  {
    text: "For Christians to be restored and be strong in the Lord",
    reference: "2 Corinthians 13:9"
  },
  {
    text: "That God gives believers the Spirit of wisdom and revelation in the knowledge of God",
    reference: "Ephesians 1:16-17"
  },
  {
    text: "That believers will have the eyes of their heart enlightened and have knowledge of the hope to which we have been called",
    reference: "Ephesians 1:18"
  },
  {
    text: "That believers know the love of Christ that surpasses all knowledge",
    reference: "Ephesians 3:19"
  },
  {
    text: "That we can boldly open our mouths and proclaim the gospel",
    reference: "Ephesians 6:19"
  },
  {
    text: "Thanking God for having partners in the gospel",
    reference: "Philippians 1:3-5"
  },
  {
    text: "That believers may abound in love, accompanied by knowledge and discernment",
    reference: "Philippians 1:9"
  },
  {
    text: "For others to be filled with the knowledge of God's will, in spiritual wisdom and understanding",
    reference: "Colossians 1:9"
  },
  {
    text: "That we can walk in a manner worthy of the Lord, fully pleasing to God",
    reference: "Colossians 1:10"
  },
  {
    text: "That we can be strengthened with power according to God's glorious might, in order that we can have endurance and patience with joy",
    reference: "Colossians 1:11"
  },
  {
    text: "Thanking God for qualifying us to share in His inheritance with the saints",
    reference: "Colossians 1:12"
  },
  {
    text: "That God may open opportunities to spread the gospel, and that the gospel message can be shared clearly",
    reference: "Colossians 4:3-4"
  },
  {
    text: "That believers may stand mature and fully assured in the will of God",
    reference: "Colossians 4:12"
  },
  {
    text: "Thanking God for faithful followers of Christ and their labor",
    reference: "1 Thessalonians 1:2-3"
  },
  {
    text: "Thanking God for faith and love growing and increasing amongst believers",
    reference: "2 Thessalonians 1:3"
  },
  {
    text: "That God may make us worthy of His calling and empower us for good works",
    reference: "2 Thessalonians 1:11"
  },
  {
    text: "Thanking God for the salvation of fellow believers",
    reference: "2 Thessalonians 2:13"
  },
  {
    text: "That the Word of God can advance and be honored by others",
    reference: "2 Thessalonians 3:1"
  },
  {
    text: "To be delivered from and guarded against the evil one",
    reference: "2 Thessalonians 3:2-3"
  },
  {
    text: "Thank a fellow believer for their love and faith in Christ",
    reference: "Philemon 4-5"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // Set random prayer point on initial load
    const randomIndex = Math.floor(Math.random() * prayerPoints.length);
    setCurrentIndex(randomIndex);
  }, []);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % prayerPoints.length);
      setFadeIn(true);
    }, 200);
  };

  const handlePrevious = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + prayerPoints.length) % prayerPoints.length);
      setFadeIn(true);
    }, 200);
  };

  const handleRandom = () => {
    setFadeIn(false);
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * prayerPoints.length);
      } while (randomIndex === currentIndex && prayerPoints.length > 1);
      setCurrentIndex(randomIndex);
      setFadeIn(true);
    }, 200);
  };

  return (
    <div className="app">
      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
      
      <header className="app-header">
        <h1>Paul's Prayer Points</h1>
        <p className="subtitle">A Collection of Prayers from the Apostle Paul</p>
      </header>

      <div className="content-wrapper">
        <PrayerPoint 
          prayerPoint={prayerPoints[currentIndex]} 
          fadeIn={fadeIn}
        />
        
        <Navigation 
          onNext={handleNext}
          onPrevious={handlePrevious}
          onRandom={handleRandom}
          currentIndex={currentIndex}
          totalCount={prayerPoints.length}
        />
      </div>

      <footer className="app-footer">
        <p>{currentIndex + 1} of {prayerPoints.length}</p>
      </footer>
    </div>
  );
}

export default App;
