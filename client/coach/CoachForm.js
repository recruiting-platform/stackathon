import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCoach } from "../redux/coachSlice";

function CoachForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    school_email: "",
    phone_number: "",
    sport: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCoach(formData));
    setFormData({
      first_name: "",
      last_name: "",
      school_email: "",
      phone_number: "",
      sport: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <label>
        School Email:
        <input
          type="email"
          name="school_email"
          value={formData.school_email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </label>
      <label>
        Sport:
        <input
          type="text"
          name="sport"
          value={formData.sport}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Coach</button>
    </form>
  );
}

export default CoachForm;
