"use client";

import { useEffect, useState } from 'react';

const texts = [
  "Hi there 👋",
  "Myself Zeeshan Elahi",
  "Software Engineer",
  "Senior MERN Stack Developer"
];

export default function AnimatedIntro() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentTextIndex >= texts.length) return;

    const currentString = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing forward
      if (currentIndex < currentString.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100); // Speed of typing
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, 50); // Speed of deleting (faster than typing)
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, isDeleting, currentTextIndex]);

  return (
    <div className="h-10 text-xl md:text-2xl text-muted-foreground font-medium flex items-center">
      <span className="relative">
        {currentText}
        {/* Blinking cursor */}
        <span className="ml-1 inline-block w-0.5 h-6 bg-primary animate-pulse"></span>
      </span>
    </div>
  );
}