import React from "react";

const Sightings = ({sightings}) => {
  return (
    <>
    <section>
      <ul>
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