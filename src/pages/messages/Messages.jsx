import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

function Messages() {
  // USer
  const currentUser = {
    id: 1,
    username: "Frank Mwale",
    isSeller: true,
  };

  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ullam perferendis, numquam nemo, ad hic dolore, voluptatibus consectetur possimus error maxime quod porro eius veniam corrupti impedit molestias laudantium dolorum.";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h2>Messages</h2>
        </div>
        {/* table */}
        <table>
          {/* table haders */}
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {/* table items */}
          <tr className="active">
            <td>Frank Mwale</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Frank Mwale</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>Frank Mwale</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages;
