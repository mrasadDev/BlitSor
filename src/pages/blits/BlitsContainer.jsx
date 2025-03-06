import React, { useRef } from "react";
import Short from "./Blits";
import { shortsData } from "../../data/ShortsData";
import "./style.css";

function ShortContainer() {
  const shortContainerRef = useRef();

  return (
    <>
      <main className="main">
        <h3 className="fw-bold mt-3 ms-5">Blits</h3>

        <section ref={shortContainerRef} className="short-container">
          {shortsData.map((short) => (
            <Short
              key={short.id}
              shortContainerRef={shortContainerRef}
              short={short}
            />
          ))}
        </section>
        <div className="navigation-container d-none d-lg-block">
          <div
           onClick={() => {
            if (shortContainerRef.current) {
              shortContainerRef.current.scrollTo({
                top: shortContainerRef.current.scrollTop - window.innerHeight,
                behavior: "smooth",
              });
            }
          }}
            className="nav-up"
          >
            <ion-icon name="arrow-up-outline"></ion-icon>
          </div>

          <div
            onClick={() => {
              if (shortContainerRef.current) {
                shortContainerRef.current.scrollTo({
                  top: shortContainerRef.current.scrollTop + window.innerHeight,
                  behavior: "smooth",
                });
              }
            }}
            className="nav-down"
          >
            <ion-icon name="arrow-down-outline"></ion-icon>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShortContainer;
