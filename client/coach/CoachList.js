import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoaches } from "../redux/coachSlice";

function CoachList() {
  const dispatch = useDispatch();
  const coaches = useSelector((state) => state.coach.coaches);

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

  return (
    <div>
      <h2>Coaches</h2>
      <ul>
        {coaches.map((coach) => (
          <li key={coach.id}>
            {coach.first_name} {coach.last_name} ({coach.sport})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoachList;
