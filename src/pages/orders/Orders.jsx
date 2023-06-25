import React from "react";
import "./Orders.scss";

function Orders() {
  // USer
  const currentUser = {
    id: 1,
    username: "Frank Mwale",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h2>Orders</h2>
        </div>
        {/* table */}
        <table>
          {/* table haders */}
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Seller" : "Buyer"}</th>
            <th>Contact</th>
          </tr>
          {/* table items */}
          <tr>
            <td>
              <img
                className="productImage"
                src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig One</td>
            <td>99.9</td>
            <td>22</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
