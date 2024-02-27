import React from "react";
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div className="row-container" style={{marginLeft:"60px",marginRight:"60px"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <>
                <Card item={item} index={index} />
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default All;
