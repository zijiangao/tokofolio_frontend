import React from "react";

export default function Modal({ result = {} }) {
  return Object.values(result).map((item) => (
    <ul class="search-list">
      <li>{item.name}</li>
      <li>
        <img
          src={`/cryptocurrency_icons/svg/color/${item.symbol.toLowerCase()}.svg`}
          alt="logo"
          width="72"
          height="72"
        />
      </li>
      <li>Symbol: {item.symbol}</li>
      <li>Price: {item.quote.USD.price}</li>
      <li>Volume 24h: {item.quote.USD.volume_24h}</li>
      <li>Percent change last 1h: {item.quote.USD.percent_change_1h}</li>
      <li>Percent change last 24h: {item.quote.USD.percent_change_24h}</li>
      <li>Percent change last 7d: {item.quote.USD.percent_change_7d}</li>
      <li>
        <button
          className="btn btn-primary"
          onClick={() => {
            //change to route invocation instead
            fetch(
              `http://localhost:5000/users/dashboard/new?symbol=${item.symbol}&price=${item.quote.USD.price}`
            );
          }}
        >
          Add to Tokofolio
        </button>
      </li>
    </ul>
  ));
}
