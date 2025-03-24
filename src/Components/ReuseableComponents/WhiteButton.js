import React from "react";

function WhiteButton({title,class1}) {
  return (
    <div class={`bus_btn ${class1}`}>
      <a href="/">
        <span>{title}</span>
        <i class="fa-solid fa-chevron-right pl-2"></i>
      </a>
    </div>
  );
}

export default WhiteButton;
