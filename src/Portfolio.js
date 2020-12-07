import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  return (
    <div>
      {portfolio ? (
        <div>
          name: {portfolio.name}
          balance:
          <ul>
            {portfolio.balance.map((item) => (
              <li>
                {item.symbol}: {item.amount}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
