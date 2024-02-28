import React from "react";
import "./descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          deserunt deleniti quia, reiciendis dignissimos nostrum laudantium
          placeat modi magni numquam! amet consectetur adipisicing elit. Nulla
          deserunt deleniti quia, reiciendis dignissimos nostrum laudantium
          placeat modi magni numquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          deserunt deleniti quia, amet consectetur adipisicing elit. Nulla
          deserunt deleniti quia, reiciendis dignissimos nostrum laudantium
          placeat modi magni numquam! reiciendis dignissimos nostrum laudantium
          placeat modi magni numquam!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
