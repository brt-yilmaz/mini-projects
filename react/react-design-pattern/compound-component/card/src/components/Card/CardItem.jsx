import React from "react";

const CardItem = ({ item }) => {
  return (
    <div>
      <a className="card-item" href={item.url}>
        {item.displayName}
      </a>
    </div>
  );
};

export default CardItem;
