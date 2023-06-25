import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h2>Gigs</h2>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        {/* table */}
        <table>
          {/* table haders */}
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
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
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
