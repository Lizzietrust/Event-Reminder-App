import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';
import "./style.css"
import mainData from './mainData';




function App() {

  const [events, setEvents] = useState(mainData);
  
  const onClear = () => {
    setEvents([])
  };

  return (
    <div className="app">
      <Header events={events}/>
      <Main events={events}/>
      <Button onClick={onClear}/>
    </div>
  );
}



export default App;
