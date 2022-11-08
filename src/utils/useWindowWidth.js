import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    let timeout;
    const getWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getWindowWidth();
      }, '500');
    };
    window.addEventListener('resize', handleResize);
    getWindowWidth();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
}
