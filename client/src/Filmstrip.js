import React from 'react';

function Filmstrip({ templates, currentIndex, setCurrentIndex, handleThumbnailClick }) {
  const thumbnailsToShow = templates.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < templates.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <div className="thumbnails group">
      <a className={`previous ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrevious}>Previous</a>
      {thumbnailsToShow.map((template, index) => (
        <div className={`thumbnails ${(currentIndex + index === currentIndex) ? 'selected' : ''}`} onClick={() => handleThumbnailClick(currentIndex + index)}>
          <img src={`/images/thumbnails/${template.thumbnail}`} alt={template.thumbnail} />
        </div>
      ))}
      <a className={`next ${currentIndex + 4 >= templates.length ? 'disabled' : ''}`} onClick={handleNext}>Next</a>
    </div>
  );
}

export default Filmstrip;
