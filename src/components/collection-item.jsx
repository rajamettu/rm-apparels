import React from "react";

import "../styles/collection-item.scss";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}.00</span>
      </div>
    </div>
  );
};

export default CollectionItem;
