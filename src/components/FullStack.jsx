import React from "react";
import Card from "./Card";

const FullStack= ({ data }) => {
  return (
        <div className="row-container" style={{marginLeft:"60px",marginRight:"60px"}}>

    <div className="row row-cols-1 row-cols-lg-3 g-4">

      {data.map((item, index) => {
        return (
          <>
            <Card item={item} index={index} />
          </>
        );
      })}
    </div>
   </div>
  );
};

export default FullStack;
