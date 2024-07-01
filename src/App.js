import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import List from './components/List';
import Footer from './components/Footer';


function App() {
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
