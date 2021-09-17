import React from "react";
import "./styles.css"

const Sightings = ({sightings}) => {
  return (
    <>
    <section 
    className="sectionColor">
      <ul>
      <h3>Sightings Archive...</h3>
        {sightings.map((s) => (
          <li key={s.sighting_id}>
            Date: {s.date_time}, Sighter Contact: {s.sighter_email} Location: {s.sighting_location},
          </li>
        ))}
      </ul>
      </section>
      </>
  );
};

export default Sightings;