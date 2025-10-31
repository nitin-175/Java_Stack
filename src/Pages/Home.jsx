import React, { useEffect, useState } from 'react'
import HeroDummy from '../Components/HeroDummy'
import Navbar from '../Components/Navbar'
import IntroEffect from '../Components/IntroEffect'



export default function Home() {

  const[showIntro, setShowIntro] = useState(true);

useEffect(() => {
    // Hide the IntroEffect after 1 second
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {showIntro ? (
        <IntroEffect />
      ) : (
        <>
          <Navbar />
          <HeroDummy />
        </>
      )}
    </>

  )
}
