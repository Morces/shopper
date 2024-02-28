import React from "react";
import "./newcollections.css";
import newcollection from "../Assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {newcollection.map((item, i) => (
          <Items
            key={i}
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

export default NewCollections;
