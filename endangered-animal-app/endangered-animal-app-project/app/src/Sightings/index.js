import React from "react";

const Sightings = ({sightings}) => {
  return (
      <ul>
        {sightings.map((s) => (
          <li key={s.individual_id}>
            Date: {s.date_time}, Sighter Contact: {s.sighter_email} Location: {s.sighting_location},
          </li>
        ))}
      </ul>
  );
  // TODO: <AddSighting {...{ addSighting }} />
};



export default Sightings;