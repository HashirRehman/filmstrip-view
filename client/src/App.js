import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filmstrip from './Filmstrip';
import './style/style.css';

function App() {
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3100/templates')
      .then(response => {
        setTemplates(response.data);
        setCurrentTemplate(response.data[0]);
      });
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentTemplate(templates[index]);
  };

  return (
    <div id="container">
      <header>Filmstrip View</header>
      {currentTemplate && 
        <div className="large-image">
          <img src={`/images/large/${currentTemplate.image}`} alt={currentTemplate.description} />
        </div>
      }
      <Filmstrip
        templates={templates}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        handleThumbnailClick={handleThumbnailClick}
      />
    </div>
  );
}

export default App;
