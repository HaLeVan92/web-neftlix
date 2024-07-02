import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import List from './components/List';
import Footer from './components/Footer';
import apiService from './app/apiService';




function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.post('/api/register', {
          "email": "eve.holt@reqres.in",
          "password": "pistol"
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();   
  }, []);


  return (
    
    <React.Fragment >
      <Header/>
      <Main/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
