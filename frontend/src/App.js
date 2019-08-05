import React from 'react';
import './App.css';
import DeliverablesContextProvider from './Contexts/DeliverablesContext'
import Header from './Components/Header';
import Deliverables from './Components/Deliverables';
import CreateDeliverable from './Components/CreateDeliverable';

function App() {
  return (
    <div className="App">
      <DeliverablesContextProvider>
        <Header/>
        <Deliverables/>
        <CreateDeliverable/>
      </DeliverablesContextProvider>
    </div>
  );
}

export default App;
