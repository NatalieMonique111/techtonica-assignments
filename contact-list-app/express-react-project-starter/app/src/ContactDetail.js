import React from "react"


const ContactDetail = ({ selectedContact, contactDetails }) => { 
 
  return (
      <>
        {selectedContact ? (
          <div>
          <h1>{contactDetails.name}</h1>
          <p>{contactDetails.email}</p>
          <p>{contactDetails.phoneNumber}</p>
          </div>
        ):null}
      </>
  );
};

export default ContactDetail;