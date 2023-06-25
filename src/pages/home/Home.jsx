import React from "react";
import Featured from "../../components/featured/Featured";
import Carousel from "../../components/carousel/Carousel";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import Features from "./components/features";
import ContactUs from "./components/ContactUs";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  return (
    <div className="home">
      {/* Featured ================ */}
      <Featured />

      {/* Clients ======================== */}
      <TrustedBy />

      {/* Categories Slider */}
      <Carousel slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Carousel>

      {/* Features ======================================== */}
      <Features />

      {/* Contact our business ========================*/}
      <ContactUs />

      {/* Projects Slider */}
      <Carousel slidesToShow={5} arrowsScroll={5}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
