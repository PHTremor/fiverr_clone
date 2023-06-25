import React from "react";
import { useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import "./Gigs.scss";

function Gigs() {
  // open sortMenu
  const [isMenuOpen, openMenu] = useState(false);

  // sort state(value)
  const [sort, setSort] = useState("sales");
  const reSort = (type) => {
    setSort(type);
    openMenu(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR {">"} GRAPHICS & DESIGN {">"}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI Artists
        </p>
        {/* Max|Min Price && sort Menu*/}
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => openMenu(!isMenuOpen)}
            />
            {isMenuOpen && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* the cards */}
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
