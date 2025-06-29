
import { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const words = ['simple.', 'Rapide.', 'votre voyage commence ici.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isPaused ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <div className="text-4xl md:text-6xl font-bold text-black mb-8">
      <div>Voyages organisés</div>
      <div className="flex items-center">
        <span className="text-agency-green typewriter">
          {currentText}
        </span>
        <span className="typewriter-cursor ml-1">|</span>
      </div>
    </div>
  );
};

export default TypewriterEffect;
