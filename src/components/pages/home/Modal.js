import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddNewItemModal from "../dashboard/AddNewItemModal";

export default function Modal({ result = {} }) {
  const [openAdd, setOpenAdd] = useState(false);
  let history = useHistory();

  return Object.values(result).map((item) =>
    !openAdd ? (
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
          <button className="btn btn-primary" onClick={() => setOpenAdd(true)}>
            Add to Tokofolio
          </button>
        </li>
      </ul>
    ) : (
      <AddNewItemModal
        show={openAdd}
        handleClose={() => {
          setOpenAdd(false);
          history.push("/dashboard");
        }}
        portfolioID={"ghjfg"}
        data={Object.values(result)[0]}
      />
    )
  );
}
