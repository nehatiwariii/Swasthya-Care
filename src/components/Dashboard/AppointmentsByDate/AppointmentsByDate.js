import React, { useEffect } from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import Appointments from "../AppointmentList/AppointmentList"

const AppointmentsByDate = ({ appointments, role }) => {
  // console.log(appointments)

  console.log(role)
  useEffect(() => {
    // fetch('http://localhost:4000/').then(res => res.json()).then((data) => console.log(data))

    // let db = firebase.firestore()
    // db.collection("patient").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });

  }, [])

  return (
    <div>
      {/* <h2>Appointments: {appointments.length}</h2> */}
      {/* {
     appointments.length? 
     <AppointmentList appointments={appointments}></AppointmentList>
     :
     <div className="p-5">
       <h2 className="text-center">No Appointments</h2>
     </div>
   } */}
      {(role == "Patient") ?
        <div>
          <h1>Hello Patient</h1>
          <div style={{ backgroundColor: 'white', padding: 10, border: '1px solid black' }}>
            <b>2:00pm<br />
              Dr John Snow<br />
              https:wwww.googleMeet/jfhsd78//3n5</b><br />
          </div>
        </div>

        :
        <div>
          <h1>Hello Doctor</h1>

          <div style={{ backgroundColor: 'white', padding: 10, border: '1px solid black' }}>
            <b>2:00pm<br />
              Mr John Snow<br />
              https:wwww.googleMeet/jfhsd78//3n5</b><br />
          </div><br />
          <div style={{ backgroundColor: 'white', padding: 10, border: '1px solid black' }}>
            <b> 3:00pm<br />
              Ms Sara Snow<br />
              https:wwww.googleMeet/jfhsd78//3n5</b><br />
          </div>
          <div style={{ backgroundColor: 'white', padding: 10, border: '1px solid black' }}>
            <b>4:00pm<br />
              Mr Billy Snow<br />
              https:wwww.googleMeet/jfhsd78//3n5</b><br />
          </div><br />
          <div style={{ backgroundColor: 'white', padding: 10, border: '1px solid black' }}>
            <b> 5:00pm<br />
              Mr Tommy Snow<br />
              https:wwww.googleMeet/jfhsd78//3n5</b><br />
          </div>
        </div>
      }
    </div>
  );
};

export default AppointmentsByDate;