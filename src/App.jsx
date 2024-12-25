import React, { useState, useEffect } from 'react';
import { GalleryData } from './GalleryData';
import './Main.css';

export default function App() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const gallery_filter = (itemData) => {
    if (itemData === 'All') {
      setData(GalleryData);
    } else {
      const filteredData = GalleryData.filter((item) => item.title === itemData);
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => gallery_filter('All')}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            <div className="galleryItem" key={item.id}>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
