import React from "react";


export default function  Main ({ events }) {
    return (
      <div>
        {events.map((event) => {
          const { id, img, name, date} = event;
          return (
            <div key={id} className="main">
                <img src={require(`../images/${img}`)}/>
                <div className="info">
                    <p>{name}</p>
                    <span>{date}</span>
                </div>
            </div> 
          );
        })}
      </div>
    );
  };

/*{require("../images/image-emily.jpg")}*/