import React from "react";
import "./popular.css";
import data from "../Assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {data.map((item, i) => (
          <Items
            keu={i}
            id={item.id}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
