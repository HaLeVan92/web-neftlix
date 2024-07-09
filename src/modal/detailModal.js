import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import apiService from '../app/apiService';
import { API_KEY } from '../app/config';
import { useParams } from 'react-router-dom'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }; 


  
function detailModal() {
    const {id} = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [trailer, setTrailer] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const data = await apiService.get(`/movie/{movie_id}/videos?api_key=${API_KEY}`);
    //       // console.log(data);
    //       setTrailer(data.data);
    //     }
    //     fetchData();
    //   },[id])
    //   console.log(setTrailer)

      const handleTrailer = async () => {
        setTrailer('')
        try {
            const fetchData = async () => {
                const data = await apiService.get(`/movie/{movie_id}/videos?api_key=${API_KEY}`);
                // console.log(data);
                setTrailer(data);
        }, catch (error) {
            console.log('error', error);
        }
      
    },
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailer} opts={opts}  />;
      </Modal>
    </div>
  )
}

export default detailModal;
