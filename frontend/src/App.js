import React from 'react';
import './App.css';
import DeliverablesContextProvider from './Contexts/DeliverablesContext'
import Header from './Components/Header';
import Deliverables from './Components/Deliverables';
import CreateDeliverable from './Components/CreateDeliverable';
import UniqueURL from './Components/UniqueURL';
import UserContextProvider from './Contexts/UserContext';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
      <DeliverablesContextProvider>
        <Header/>
        <UniqueURL/>
        <Deliverables/>
        <CreateDeliverable/>
      </DeliverablesContextProvider>
    </UserContextProvider>
    </div>
  );
}

export default App;
