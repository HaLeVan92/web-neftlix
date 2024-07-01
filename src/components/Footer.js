import React from 'react'

function Footer() {
  return (

    <div className='footer'>
        <div className='footer-content'>            
            <div className='footer-content-logo'>
            
                      <img src="https://duy-movie-app.netlify.app/static/media/netflixlogo.ce3078b4cc1d1d95414a.png"  alt="Netflix Logo" className="navLogo" />
                    
            </div>
            <div className='footer-content-menus'>
                <div className='footer-menu'>
                    <p href='/'>Home</p>
                    <p href='/'>Contact us</p>
                    <p href='/'>Term of servieces</p>
                    <p href='/'>About us</p>
                </div>
                <div className='footer-menu'>
                    <p href='/'>Live</p>
                    <p href='/'>FAQ</p>
                    <p href='/'>Premium</p>
                    <p href='/'>Privacy policy</p>
                </div>
                <div className='footer-menu'>
                    <p className='textMenu' href='/'>Must watch</p>
                    <p href='/'>Recent release</p>
                    <p href='/'>Top IMDB</p>
                    
                </div>
            </div>
        </div>
        <div className='footer-signature'>
            <p>@2024 Made in ❤ by Ha Le</p>
        </div>
    </div>

  )
}

export default Footer

