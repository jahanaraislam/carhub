import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./MyOrders.css";
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  // get order by using email
  useEffect(() => {
    fetch(`https://radiant-lake-94884.herokuapp.com/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, control, orders]);
  // delete order from my order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(`https://radiant-lake-94884.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(true);
            alert("Deleted successfully");
          }
        });
    }
  };
  return (
    <div className="my-booking">
      <div className="text-center my-4 fw-bold fs-2">
        My Orders: {orders.length} Collections
      </div>
      <div className="row text-center my-5">
        {orders?.map((pd, index) => (
          <div key={index} className="col-12 ">
            <Table striped bordered hover>
              <thead className="fs-5 table-head">
                <tr>
                  <th>#</th>
                  <th> Order Collection</th>

                  <th>status</th>
                  <th>City</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="fw-bold">
                <tr>
                  <td>{index + 1}</td>
                  <td>{pd.name}</td>
                  <td>{pd.status}</td>
                  <td>{pd?.city}</td>
                  <td>{pd.address}</td>
                  <td
                    onClick={() => handleDelete(pd?._id)}
                    className="btn my-1 fw-bold fs-6 w-75 mx-auto bg-danger px-4"
                  >
                    Delete
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default MyOrders;
