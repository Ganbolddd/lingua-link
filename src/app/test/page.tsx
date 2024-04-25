'use client';
import { useState, useEffect } from 'react';

const ScrollControlledRouting = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Define a threshold scroll position for routing
  const threshold = 500; // Adjust this value as needed

  // Check if scroll position exceeds threshold and route accordingly
  useEffect(() => {
    if (scrollPosition > threshold) {
      // Replace with your desired routing logic
      window.location.href = '/destination'; // This will navigate to '/destination'
    }
  }, [scrollPosition]); // This effect runs whenever scrollPosition changes

  return (
    <div className='h-[1500px]'>
      <h1>Scroll down to trigger routing</h1>
      <p>Current Scroll Position: {scrollPosition}</p>
    </div>
  );
};

export default ScrollControlledRouting;