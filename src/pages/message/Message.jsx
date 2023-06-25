import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> &gt; FRANK MWALE &gt;
        </span>
        <div className="messages">
          <div className="item">
            {/* profile img */}
            <img
              src="https://res.cloudinary.com/dzpmaecfq/image/upload/v1681135657/health_builders/ophld1t3ettqbmrk6s8g.jpg"
              alt=""
            />
            {/* the message */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              numquam recusandae consequatur aliquam omnis quia officia
              voluptatem dolore a praesentium est, quas optio, aspernatur soluta
              voluptatum, nesciunt dignissimos cum! Reiciendis!
            </p>
          </div>
          <div className="item">
            {/* profile img */}
            <img
              src="https://res.cloudinary.com/dzpmaecfq/image/upload/v1681135657/health_builders/ophld1t3ettqbmrk6s8g.jpg"
              alt=""
            />
            {/* the message */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              numquam recusandae consequatur aliquam omnis quia officia
              voluptatem dolore a praesentium est, quas optio, aspernatur soluta
              voluptatum, nesciunt dignissimos cum! Reiciendis!
            </p>
          </div>
          <div className="item owner">
            {/* profile img */}
            <img
              src="https://res.cloudinary.com/dzpmaecfq/image/upload/v1681135657/health_builders/ophld1t3ettqbmrk6s8g.jpg"
              alt=""
            />
            {/* the message */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              numquam recusandae consequatur aliquam omnis quia officia
              voluptatem dolore a praesentium est, quas optio, aspernatur soluta
              voluptatum, nesciunt dignissimos cum! Reiciendis!
            </p>
          </div>
          <div className="item owner">
            {/* profile img */}
            <img
              src="https://res.cloudinary.com/dzpmaecfq/image/upload/v1681135657/health_builders/ophld1t3ettqbmrk6s8g.jpg"
              alt=""
            />
            {/* the message */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              numquam recusandae consequatur aliquam omnis quia officia
              voluptatem dolore a praesentium est, quas optio, aspernatur soluta
              voluptatum, nesciunt dignissimos cum! Reiciendis!
            </p>
          </div>
        </div>
        <hr />
        <div className="writeSection">
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
