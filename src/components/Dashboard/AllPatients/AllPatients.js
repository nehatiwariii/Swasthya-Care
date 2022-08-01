import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AllPatientDataTable from "./AllPatientDataTable";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  useState(() => {
    fetch("https://afternoon-shelf-60296.herokuapp.com/AllPatients")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-5">
          <h2 className="text-center mb-3"><u>All Doctors</u></h2>
          {/* <AllPatientDataTable
            appointments={appointments}
          ></AllPatientDataTable> */}
          <table class="table table-striped table-hover">
            <tr>
              <th>DOCTOR NAME</th>
              <th>DESIGNATION</th>
              <th>PHONE NO</th>
            </tr>
            <tr>
              <td>Dr.D.SHUKLA</td>
              <td>Orthopedic Surgeon</td>
              <td>0392809213</td>
            </tr>
            <tr>
              <td>Dr V.K TIWARI</td>
              <td>MD.PHYSICIAN</td>
              <td>0392809213</td>
            </tr>
            <tr>
              <td>Dr. Miller </td>
              <td>PHYSCOLOGIST</td>
              <td>0392809217</td>
            </tr>
            <tr>
              <td>Dr. Ishitha</td>
              <td>DENTIST</td>
              <td>0392809216</td>
            </tr>
            <tr>
              <td>Dr. WILLIAM</td>
              <td>CARDIOLOGIST</td>
              <td>0392809215</td>
            </tr>
            <tr>
              <td>Dr. REVATH</td>
              <td>SURGEON</td>
              <td>0392809214</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllPatients;
