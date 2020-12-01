import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const id = match.params.id;
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
    const object = await data.json();
    setItem(object.data.item);
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt={item.name} />
    </div>
  );
}

export default ItemDetail;