import * as React from "react";

import * as apiClient from "./apiClient";

const Contacts = () => {
  const [contacts, setContacts] = React.useState([]);

  const loadContacts = async () => setContacts(await apiClient.getContacts());
  const addContact = async (contact) => {
    await apiClient.addContact(contact);
    loadContacts();
  };

  React.useEffect(() => {
    loadContacts();
    // console.log("contacts", contacts); // always log your response when starting development
  }, []);

  return (
    <section>
      <ContactList {...{ contacts }} />
      <AddContact {...{ addContact }} />
    </section>
  );
};
//
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ contact_id, name, email, phone_number, notes }) => (
      <li key={contact_id}>
        {name} {email} {phone_number} {notes}
      </li>
    ))}
  </ul>
);

const AddContact = ({ addContact }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const {
      name: { value: name },
      email: { value: email },
      phoneNumber: { value: phoneNumber }, // must match
      notes: { value: notes },
    } = form.elements;

    addContact({ name, email, phoneNumber, notes });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name: <input name="name" required />
      </label>
      <label>
        Email: <input name="email" required />
      </label>
      <label>
        number: <input name="phoneNumber" required />
      </label>
      <label>
        notes: <input name="notes" required />
      </label>
      <button>Add Contact</button>
    </form>
  );
};

export default Contacts;
