import React from 'react'


const Main = () => {
  return(
    <div className="homeBanner">
      <video class="videoIntro" width="100%" height="800px" autoPlay muted controls onPlaying={false}>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />        
      </video>
      <div className="infoIntro">
        <h1 className="headingIntro">
          <span className='colorText'>NETFLIX</span>  | Wormwood
        </h1>
        <p className='overViewIntro'>
        Materia for Netflix We had the exciting task to visualize the LSD trip sequences for Netflix' upcoming documentary series „Wormwood“ by Oscar winning director Errol Morris (director of „The Fog of War“). This six-part series probes the mysterious death of a Cold War military scientist involved in a secret biological warfare program. Starting December 15, 2017.
        </p>
      </div>
      
    </div>
  )
}

export default Main;