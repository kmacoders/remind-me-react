import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todolist from './Components/TodoList/Todolist';

function App() {
  return (
    <div className="App">
      <Header title="Remind Me" />
      <Todolist />
      <Footer />
    </div>
  );
}

export default App;
