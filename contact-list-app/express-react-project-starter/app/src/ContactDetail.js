import React from "react"

import { useParams } from "react-router";

import * as apiClient from "./apiClient";


const ContactDetail = ({ selectedContact, contactDetails }) => {
  let { contact_id } = useParams();
  // const loadContact = async () => {await apiClient.getContact(contact_id)}

  // React.useEffect(() => {
  //   loadContact();
    // console.log("contacts", contacts); // always log your response when starting development
  // }, []);

 
  return (
      <>
      <h1>Contact Details { contact_id }</h1>
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