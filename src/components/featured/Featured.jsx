import React from 'react'
import './Featured.scss'

function Featured() {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find The Perfect <i>Freelance</i> Services For Your Business</h1>
                {/* Search bar */}
                <div className="search">
                    <div className="searchInput">
                        <img src="./images/search.png" alt="search icon" />
                        <input type="text" placeholder='Try "Building a mobile app"' />
                    </div>
                    <button>Search</button>
                </div>
                {/* Popular tags */}
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            {/* image on the right */}
            <div className="right">
                <img src="./images/man.png" alt="man" />
            </div>
        </div>
    </div>
  )
}

export default Featured