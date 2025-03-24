import React from "react";

function TitleComponent({title,title2,spantitle,spantitle2,classname}) {
  return (
    <div className={` ${classname} cap_title text-center d-flex justify-content-center aling-items-center`}>
      <h1>
        {title} <span>{spantitle}</span> {title2} <span>{spantitle2}</span>
      </h1>
    </div>
  );
}

export default TitleComponent;
