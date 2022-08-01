import React from "react";
import img1 from "../../../images/Ellipse 1.png";
import img2 from "../../../images/Ellipse 2.png";
import img3 from "../../../images/Ellipse 3.png";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
const testimonialsData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente quisquam labore aliquam beatae eveniet incidunt, fugit iste maxime totam, necessitatibus a inventore quos sequi!",
    name: "Mahi",
    from: "Chattisgarh",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente quisquam labore aliquam beatae eveniet incidunt, fugit iste maxime totam, necessitatibus a inventore quos sequi!",
    name: "Raju",
    from: "Chattisgarh",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sapiente quisquam labore aliquam beatae eveniet incidunt, fugit iste maxime totam, necessitatibus a inventore quos sequi!",
    name: "Hari",
    from: "Chattisgarh",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials mt-5 ">
      <div className="container">
        <div className="section-header">
          <h5 className="text-info text-uppercase">Testimonial</h5>
          <h2>
            Whats our Patients <br /> Says
          </h2>
        </div>

        <div className="row">
          <div className="card-deck mt-5">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                testimonial={testimonial}
                key={testimonial.name}
              ></TestimonialCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
