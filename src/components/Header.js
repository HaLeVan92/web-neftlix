import React from 'react'
import Button from '@mui/material/Button';






const Header = () => {
    return(
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">

                    <a className="navbarBrand" href="#">
                     {/* eslint-disable-next-line */}
                      <img src="https://duy-movie-app.netlify.app/static/media/netflixlogo.ce3078b4cc1d1d95414a.png"  alt="Netflix Logo" className="navLogo" />
                    </a>

                    <input type="text" className="searchMovies"></input>
                    
                    <div className="navBar">
                        <from className="dFlex" role="search">
                            <select>
                                <option> English </option>
                                <option> VietNam </option>
                            </select>
                            <Button variant="contained">Sign in</Button>
                        </from>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;