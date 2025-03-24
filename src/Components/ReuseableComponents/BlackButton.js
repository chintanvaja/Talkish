import React from "react";

function BlackButton({btnName}) {
  return (
    <a href="/">
      <p>{btnName}</p>
      <i class="fa-solid fa-chevron-right pl-2"></i>
    </a>
  );
}

export default BlackButton;
