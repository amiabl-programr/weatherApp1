import React from "react";
import "./index.css";

function Loader() {
  return (
    <>
      <div
        style={{
          height: "300px",
          textAlign: "center",
        }}
      >
        <div class="lds-hourglass"></div>
      </div>
    </>
  );
}

export default Loader;
