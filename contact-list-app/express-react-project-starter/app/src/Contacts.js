import * as React from "react";

import { Link } from "react-router-dom";

import ContactDetail from "./ContactDetail";
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

//a component for edit, when clicked, the read only text will populate as a form, but when user changes, the state of the hook 
//set contact with new data, and connect to the back end. 

// const ContactEdit = ({ contact }) => {
//   const editContact = async (contact) => {
//     await apiClient.editContact(contact);
//   }
//   const onEdit = (contact) => {
//     console.log("contact", contact);
//     editContact(contact);
//   };
//   const onChange = (event) => {
//     setValue(event.target.value);
//     // index of the contact, name of the contact property, setvalue
//     setContacts(contacts);
//   };
//   return (
//     <form>
//       <button onClick={() => onEdit(c)}>Edit</button>
//       <label>
//         Name: <input name="name" value={value} onChange={onChange} required />
//       </label>
//       <label>
//         Email: <input name="email" value={value} onChange={onChange} required />
//       </label>
//       <label>
//         number: <input name="phoneNumber" value={value} onChange={onChange} required />
//       </label>
//       <label>
//         notes: <input name="notes" value={value} onChange={onChange} required />
//       </label>
//       <button>Add Contact</button>
//     </form>
//   );
// };

const ContactList = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = React.useState("");
  const [contactDetails, setContactDetails] = React.useState({});

  const loadContact = React.useCallback(
    () =>
      apiClient.getContact(selectedContact).then(setContactDetails),
    [selectedContact],
  );

  React.useEffect(() => {
    selectedContact !== undefined && loadContact();
  }, [selectedContact, loadContact]);

  return (
    <>
    <ul>
      {contacts.map((c) => (
       <li key={c.contact_id}>
        {/* <button onClick={() => onEdit(c)}>Edit</button> */}
        {/* toggle visibility of edit component */}
        <Link to={`/c/{c.name}`}> {c.name}</Link> {c.email} {c.phone_number} {c.notes} 
        {/* <ContactEdit {...{c}}></ContactEdit> */}
      </li>
    ))}
   </ul>
   <ContactDetail {...{ selectedContact, contactDetails }} />
   </>
  );
};

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
