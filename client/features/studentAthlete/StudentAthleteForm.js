import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStudentAthlete } from "../store/studentAthleteSlice";

const StudentAthleteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    sport: "",
    school: "",
    graduationYear: "",
  });

  const dispatch = useDispatch();

  // updates the state of the component as the user inputs data in the form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // sends the form data to the server and resets the form data to its initial values
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStudentAthlete(formData));
    setFormData({
      firstName: "",
      lastName: "",
      sport: "",
      school: "",
      graduationYear: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sport">Sport:</label>
        <input
          type="text"
          id="sport"
          name="sport"
          value={formData.sport}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={formData.school}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="graduationYear">Graduation Year:</label>
        <input
          type="text"
          id="graduationYear"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Student Athlete Profile</button>
    </form>
  );
};

export default StudentAthleteForm;
