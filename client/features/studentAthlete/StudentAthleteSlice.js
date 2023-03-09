import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// thunks

// async POST action that creates a new student athlete profile
export const createStudentAthlete = (formData) => async (dispatch) => {
  try {
    const response = await axios.post("/api/studentAthletes", formData);
    dispatch(addStudentAthlete(response.data));
  } catch (error) {
    console.error(error);
  }
};

// slice
export const studentAthleteSlice = createSlice({
  name: "studentAthlete",
  initialState: [],
  reducers: {
    setStudentAthletes: (state, action) => {
      return action.payload;
    },
    addStudentAthlete: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setStudentAthletes, addStudentAthlete } =
  studentAthleteSlice.actions;

export default studentAthleteSlice.reducer;
