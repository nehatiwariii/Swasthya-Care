import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const infosData = [
  {
    title: "Opening Hours",
    description: "We are open all days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Your Video Call Area",
    description: "In your Gram Panchayat",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us Now",
    description: "Your nearest RMP",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75 ">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
