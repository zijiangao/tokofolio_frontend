import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import AddNewItemModal from "./AddNewItemModal";
import DeleteAccountModal from "./DeleteAccountModal";
import NewTokofolioModal from "./NewTokofolioModal";
import EditItemModal from "./EditItemModal";
import Navibar from "../../Navibar";
import { withCookies } from "react-cookie";

import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(true);
  const [requireUpdate, setRequireUpdate] = useState();
  const [items, setItems] = useState(null);
  const [portfolios, setPortfolios] = useState(null);
  let token = props.cookies.get("token");

  useEffect(() => {
    console.log("refres");
    setActive(token);
    fetch(`http://localhost:5000/users/dashboard`)
      .then((res) => res.json())
      .then((data) => {
        //setUser(data.user);
        setItems(data);
      });
    fetch(`http://localhost:5000/users/portfolios?token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        let index = 0;
        if (user) {
          index = data.findIndex((item) => item._id == user._id);
        }
        console.log(index);
        setUser(data[index == -1 ? 0 : index]);
        setPortfolios(data);
      });
  }, [requireUpdate]);

  // console.log(this.props.cookies.get("token"));
  return (
    <div className="container-fluid">
      <Navibar></Navibar>

      {user ? (
        <div className="container">
          {!active ? (
            <div>your session is expired</div>
          ) : (
            <>
              <h1>Welcome to your Tokofolio</h1>
              <div className="action-button">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setOpenAdd(true)}
                >
                  Add to Tokofolio
                </button>
                {openAdd && (
                  <AddNewItemModal
                    show={openAdd}
                    handleClose={() => {
                      setOpenAdd(false);
                      setRequireUpdate(Symbol());
                    }}
                    portfolioID={user._id}
                  />
                )}
                <button
                  className="btn btn-danger  btn-sm"
                  onClick={() => setOpenDel(true)}
                >
                  Delete Account
                </button>
                {openDel && (
                  <DeleteAccountModal
                    show={openDel}
                    handleClose={() => {
                      setOpenDel(false);
                      setRequireUpdate(Symbol());
                    }}
                  />
                )}
                <button
                  className="btn btn-secondary  btn-sm"
                  onClick={() => setOpenNew(true)}
                >
                  Add new Tokofolio
                </button>
                {openNew && (
                  <NewTokofolioModal
                    show={openNew}
                    handleClose={() => {
                      setOpenNew(false);
                      setRequireUpdate(Symbol());
                    }}
                    token={token}
                  />
                )}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {user.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {portfolios &&
                      portfolios.map((item) => (
                        <Dropdown.Item
                          //href={"/portfolios/" + item.id}
                          onClick={() => setUser(item)}
                        >
                          {item.name}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {user && items ? (
                <>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>Token</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Qty</th>
                        <th>Price buy</th>
                        <th>Price today</th>
                        <th>P/L</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(user.portfolio || []).map((item, index) => (
                        <Row
                          item={item}
                          setTotal={setTotal}
                          total={total}
                          index={index}
                          setUser={setUser}
                          update={setRequireUpdate}
                          token={token}
                          items={items}
                          user={user}
                        />
                      ))}
                    </tbody>
                  </table>
                  <p>
                    Total: $
                    <span style={{ color: total > 0 ? "green" : "red" }}>
                      {total.toFixed(2)}
                    </span>
                  </p>
                </>
              ) : (
                <div>Your tokofolio is empty</div>
              )}
            </>
          )}
        </div>
      ) : (
        <h1>You need to login first to get access to your Tokofolio</h1>
      )}
    </div>
  );
}

function Row({
  item,
  setTotal,
  total,
  index,
  setUser,
  update,
  token,
  items,
  user,
}) {
  const [profit, setProfit] = useState(0);
  const [current, setCurrent] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);

  function remove(index) {
    fetch(
      `http://localhost:5000/users/dashboard?token=${token}&portfolioId=${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          index: index,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data !== null) {
          update(Symbol());
          alert("delete succefull");
        } else {
          alert("something went wrong, try again later");
        }
      });
  }

  useEffect(() => {
    let current =
      Math.round(items[item.symbol.toUpperCase()]?.quote.USD.price * 1000) /
        1000 || 0;
    let newProfit = (current - item.price) * item.qty;
    setProfit(newProfit);
    setCurrent(current);
    setTotal(total + newProfit);
    // eslint-disable-next-line
  }, [item]);

  return (
    <tr>
      <td>
        <img
          src={`/cryptocurrency_icons/svg/color/${item.symbol.toLowerCase()}.svg`}
          alt="logo"
          width="50"
          height="50"
        />
      </td>
      <td>{item.symbol}</td>
      <td>{item.date}</td>
      <td>{item.qty}</td>
      <td>{item.price}</td>

      <td>{current}</td>
      <td style={{ color: profit > 0 ? "green" : "red" }}>
        {profit.toFixed(2)}
      </td>
      <td>
        <div className="d-flex">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setOpenEdit(true)}
          >
            Edit
          </button>

          {openEdit && (
            <EditItemModal
              show={openEdit}
              handleClose={() => {
                setOpenEdit(false);
                update(Symbol());
              }}
              item={item}
              index={index}
              portfolioID={user._id}
            />
          )}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}

export default withRouter(withCookies(Dashboard));
