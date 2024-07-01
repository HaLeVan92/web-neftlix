import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function List() {
  return (
    <div className='list'>
        <h2 className='text-genres'>Netflix</h2>
        <div className='row'>
            <div className='listMovies'>
                <div className='movie'>
                    <img src='https://mcdn.coolmate.me/image/April2022/series-phim-hay-tren-netflix_391.jpg' alt='Movie 1' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 1</h3>
                </div>
                <div className='movie'>
                    <img src='https://www.elle.vn/wp-content/uploads/2021/12/13/460451/phim-giang-sinh-netflix-a-boy-called-christmas-750x1100-1.jpg' alt='Movie 2' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 2</h3>
                </div>
                <div className='movie'>
                    <img src='https://www.elle.vn/wp-content/uploads/2021/09/29/450823/phim-han-sweet-home.jpg' alt='Movie 3' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 3</h3>
                </div>
                <div className='movie'>
                    <img src='https://cdn.nguyenkimmall.com/images/companies/_1/Tin_tuc/phim-kinh-di-netflix-5.jpg' alt='Movie 4' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 4</h3>
                </div>
                <div className='movie'>
                    <img src='https://mcdn.coolmate.me/image/April2022/series-phim-hay-tren-netflix_391.jpg' alt='Movie 1' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 1</h3>
                </div>
                <div className='movie'>
                    <img src='https://www.elle.vn/wp-content/uploads/2021/12/13/460451/phim-giang-sinh-netflix-a-boy-called-christmas-750x1100-1.jpg' alt='Movie 2' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 2</h3>
                </div>
                <div className='movie'>
                    <img src='https://www.elle.vn/wp-content/uploads/2021/09/29/450823/phim-han-sweet-home.jpg' alt='Movie 3' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 3</h3>
                </div>
                <div className='movie'>
                    <img src='https://cdn.nguyenkimmall.com/images/companies/_1/Tin_tuc/phim-kinh-di-netflix-5.jpg' alt='Movie 4' width='360' height='500'/>
                    <h3 className='moviesName'>Movie 4</h3>
                </div>
            </div>
            <div className='btnLeft'>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>              
            </div>
            <div className='btnRight'>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />     
            </div>
        </div>
    </div>
  )
}

export default List

