import React from "react";

import "../styles/collection-preview.scss";
import CollectionItem from "../components/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
