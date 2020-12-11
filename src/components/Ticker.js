import React, { Component, useLayoutEffect } from "react";
import Marquee from "marquee-react-dwyer";
import axios from "axios";
import "./style.css";

export default function Ticker({ items }) {
  useLayoutEffect(() => {
    const marqueeContent = document.querySelector("ul.marquee-content");

    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);
  return (
    <div className="marquee">
      <ul className="marquee-content">
        {items.map((coin) => (
          <li>
            {coin.symbol}: {Math.round(coin.quote.USD.price).toFixed(3)}
          </li>
        ))}
      </ul>
    </div>
  );
}
