import React from "react";

import * as apiClient from "../apiClient";
import "./styles.css";

const AddSighting = ({sightings, setSightings}) => {
  // if sighting contains data, allow add.
  const canAdd = true; //sighting !== null;

  const onSubmit = async (event) => {
    event.preventDefault();
    if(!canAdd) return;
  
    // TODO below this line, make look like AddTask, but use form {} instead of string
    const form = event.currentTarget;
    const elements = form.elements;

    const request = {
      dateTime: elements.dateTime.value,
      sightingLocation: elements.sightingLocation.value,
      isHealthy: elements.isHealthy.value,
      sighterEmail: elements.sighterEmail.value
    };

    // Post, reload with new sighting, clear form.    
    const resp = await apiClient.addSighting(request);
    console.log('resp: ', resp);
    setSightings([...sightings, resp]);
    form.reset();
  }
  return (
    <form className = 'form'{...{ onSubmit }}>
      <label>
        date:
        <input name="dateTime" required />
      </label>
      <label>
        location:
        <input name="sightingLocation" required />
      </label>
      <label>
        is healthy:
        <input name="isHealthy" required />
      </label>
      <label>
        Sighter Email:
        <input name="sighterEmail" type="email" required />
      </label>
      <button>Add Sightings</button>
    </form>
  )
};

export default AddSighting;