import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"Bienvenido a Bad Karma"}/>
    </div>
  );
}

export default App;
