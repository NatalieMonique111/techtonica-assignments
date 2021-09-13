export const getEvents = async () => {
  const response = await fetch("/api/events");
  return response.json();
};

export const addEvent = async (name, category) => {
  const response = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, category }),
  });
  return response.json();
};
