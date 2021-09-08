import React, { useReducer, useState } from 'react';

//initial state 
const initialState = {
  id: "",
  name: "",
  date: null,
  description: "",
  category: "",
};

//reducer function
const reducer = (state, action) => {
  console.log(action, "this is the action");

  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched")
      return { ...state, name: action.payload };

    case "editId":
      return { ...state, id: action.payload };

    case "editDate":
      return { ...state, date: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

const Events = () => {
  const event1 = {
    id: 1,
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };

  const event2 = {
    id: 2,
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };

  const event3 = {
    id: 3,
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

  const [events, setEvents] = useState([event1, event2, event3]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEvent = e => {
    e.preventDefault();
    const newEvent = {
      id: state.id,
      name: state.name,
      date: state.date,
      description: state.description,
      category: state.category,
    }
    setEvents([...events, newEvent])
    console.log(newEvent)
  }

  return (
    <>
      <section className="event-management">
        <h2>Event Management</h2>
        <div>
          <h3>All Events</h3>
          <ul id="events-list">
            {events.map((event, i) =>
              <p><li key={i}>Event ID: {event.id},
                Event Name: {event.name},
                Description: {event.description},
                Date: {event.date},
                Category: {event.category}
              </li></p>)}
          </ul>

          <h3>Add Event</h3>
          <form id="add-event" action="#">
            <fieldset>
              <div>
                <label>Event Id</label>
                <input
                  type="text"
                  required
                  name="id"
                  id="add-event-id"
                  value={state.id}
                  placeholder="Add event id"
                  onChange={(e) =>
                    dispatch({
                      type: "editId",
                      payload: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="add-event-name"
                  value={state.name}
                  placeholder="Add event name"
                  onChange={(e) =>
                    dispatch({
                      type: "editName",
                      payload: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  id="add-event-date"
                  value={state.date}
                  placeholder="Add event date"
                  onChange={(e) =>
                    dispatch({
                      type: "editDate",
                      payload: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  id="add-event-description"
                  value={state.description}
                  placeholder="Add event description"
                  onChange={(e) =>
                    dispatch({
                      type: "editDescription",
                      payload: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  id="add-event-category"
                  value={state.category}
                  placeholder="Add event category"
                  onChange={(e) =>
                    dispatch({
                      type: "editCategory",
                      payload: e.target.value
                    })
                  }
                />
              </div>
            </fieldset>
            <input type="submit" onClick={addEvent} />
          </form>
        </div>
      </section>
    </>
  )
}


export default Events;

