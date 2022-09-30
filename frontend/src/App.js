import { useEffect, useState } from 'react';
import './App.scss';
import { namesApi } from './services/namesApi';

function App() {
  const [isApiUp, setIsApiUp] = useState(false);

  useEffect(() => {
    namesApi.getHealth().then(() => {
      setIsApiUp(true);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <span>Full Stack Interview Exercise</span>
        <span className="api-status" data-status={isApiUp ? 'ONLINE' : 'OFFLINE'}></span>
      </div>
      <div className="main">Add your components here</div>
    </div>
  );
}

export default App;
