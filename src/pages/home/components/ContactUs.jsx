import React from 'react'

function ContactUs() {
  return (
    <div className="features dark">
        <div className="container">
          <div className="item">
          <h1>Fiveer Business</h1>
          <h1>A business solutuion design for teams</h1>
          <p>
            Upgared to a curated experince packed with tools and benefits,
            depicted to businesses
          </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experince
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr business</button>
          </div>
          <div className="item">
          <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt="image"
            />
          </div>
        </div>
      </div>
  )
}

export default ContactUs