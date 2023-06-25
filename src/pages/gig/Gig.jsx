import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">
            FIVERR &gt; GRAPHICS & DESIGN &gt;
          </span>
          <h1>I will create AI generated art for you</h1>

          {/* user || rating */}
          <div className="user">
            <img
              className="profilePic"
              src="https://res.cloudinary.com/dzpmaecfq/image/upload/v1681135657/health_builders/ophld1t3ettqbmrk6s8g.jpg"
              alt=""
            />
            <span>Frank Mwale</span>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />

              <span>5</span>
            </div>
          </div>

          {/* images */}
          <Slider slidesToShow={1} arrowsScroll={1} className="slide">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>

          {/* about gig */}
          <h2>About this gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>

          {/* Seller section */}
          <div className="seller">
            <h2>About Seller</h2>
            <div className="user">
              <img
                src="https://res.cloudinary.com/dzpmaecfq/image/upload/v1681135657/health_builders/ophld1t3ettqbmrk6s8g.jpg"
                alt=""
              />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />

                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            {/* other info box */}
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2012</span>
                </div>
                <div className="item">
                  <span className="title">Avg. Response Time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              {/* user info */}
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="profilePic"
                />
                <div className="info">
                  <span>Frank Mwale</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              {/* rating */}
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              {/* comment */}
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              {/* helpful */}
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              {/* user info */}
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="profilePic"
                />
                <div className="info">
                  <span>Frank Mwale</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              {/* rating */}
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              {/* comment */}
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              {/* helpful */}
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              {/* user info */}
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="profilePic"
                />
                <div className="info">
                  <span>Frank Mwale</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              {/* rating */}
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              {/* comment */}
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              {/* helpful */}
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          {/* price */}
          <div className="price">
            <h3>1 AI generated Image</h3>
            <h2>MWK 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you will give me
          </p>
          {/* delivery */}
          <div className="details">
            <div className="item">
              <img src="/images/clock.png" alt="" />
              <span>2 day delivery</span>
            </div>
            <div className="item">
              <img src="/images/recycle.png" alt="" />
              <span>3 revisions</span>
            </div>
          </div>
          {/* features */}
          <div className="features">
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
