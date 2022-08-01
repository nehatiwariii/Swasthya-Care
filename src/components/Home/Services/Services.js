import React from "react";
import Fluoride from "../../../images/fluride.png"
import Cavity from "../../../images/cavity.png";
import Teath from "../../../images/whitening.png";
import ServiceDetail from "./ServiceDetail";

const serviceData = [
  {
    name: "Taru Foundation",
    img: Fluoride,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit laboriosam quam tenetur? Libero, iste voluptas?",
  },
  {
    name: "NITI Ayog",
    img: Cavity,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit laboriosam quam tenetur? Libero, iste voluptas?",
  },
  {
    name: "World Youth Summit",
    img: Teath,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit laboriosam quam tenetur? Libero, iste voluptas?",
  },
];
const Services = () => {
  return (
    <section className="service-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Programmes We follow</h2>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="row w-75 mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
