import React from "react";

const Card = ({ item, index }) => {
  return (
    <div className="col" key={index}>
      <div className="card">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.head}</h5>
          <p
            style={{ fontWeight: "lighter", fontSize: "12px" }}
            className="card-title"
          >
            {item.description}
          </p>
        </div>
        <div className="card-footer" style={{display:"flex", justifyContent:"space-between",fontWeight:"500"}}>
          <small className="text-muted">{item.date}</small>
          <small className="text-muted">{item.readtime}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
