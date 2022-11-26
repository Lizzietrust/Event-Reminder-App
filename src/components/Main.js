import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function  Main ({ events, onDelete }) {
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
                <FontAwesomeIcon className="trash" icon={faTrash} onClick={() => onDelete(event.id)}/>
            </div> 
          );
        })}
      </div>
    );
  };

/*{require("../images/image-emily.jpg")}*/