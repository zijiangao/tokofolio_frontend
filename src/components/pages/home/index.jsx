import React, { useState } from "react";
import "./style.css";
import Modal from "./Modal";
import Ticker from "../../Ticker";
import Navibar from "../../Navibar";

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  function searchCoins() {
    //show loader
    setLoading(true);
    setResult(null);

    fetch(
      `https://cryptic-sands-87652.herokuapp.com/coin-portfolio-data?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setResult(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("complete");
      });
  }

  return (
    <div className="add-background">
      <div className="Ticker">
        <Ticker></Ticker>
      </div>

      <div className="Navbar">
        <Navibar></Navibar>
      </div>

      <header>
        <h1>Start your Tokofolio today!</h1>
      </header>
      <div className="parent main column">
        <div
          id="search-bar-container"
          className="parent box search-bar-container "
        >
          <div className="parent form">
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="shadow-lg"
                placeholder="Search tokens"
                size="50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                style={{ position: "absolute", right: "50px" }}
                onClick={searchCoins}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        {loading && <div className="loader">Loading...</div>}

        {result && <Modal result={result} />}
      </div>
    </div>
  );
}
