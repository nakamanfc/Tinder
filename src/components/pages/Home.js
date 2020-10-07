import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import WindowLg from '../WindowLg'

function Home() {
    return(
        <>
            {/* <WindowLg/> */}
            <HeroSection />
            <Cards />
        </>
    )
}

export default Home;