import React, { useEffect } from "react";
import sal from "sal.js";
import "./App.css";
import "sal.js/dist/sal.css";
export default function App() {
  useEffect(sal, []);
  return (
    <div className="App">
      {Array.from({ length: 100 }).map((a, index) => (
        <div
          data-sal-repeat
          data-sal-threshold="1"
          data-sal-easing="ease-OutElastic"
          data-sal-delay="1000"
          data-sal-duration="2000"
          data-sal="slide-right"
          data-sal-once="false"
          className=""
          key={index}
        >
          <div> Blogreact</div>
          <div> Blogreact</div>
          <br />
        </div>
      ))}
    </div>
  );
}
