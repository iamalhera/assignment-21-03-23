import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App_wrapper">
      <Navbar dataSetter={setData} setIsLoading={setIsLoading}/>
      {
        isLoading && <LoadingSpinner />
      }
      {
        data.length >0 && <Main data={data} isLoading={isLoading}/>
      }
    </div>
  );
}

export default App;
