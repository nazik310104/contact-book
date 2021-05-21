import React, { useState } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

function ContactBook() {
  const [contactList, setContactList] = useState([]);
  return (
    <div>
      <Form contactList={contactList} setContactList={setContactList} />
      <ContactList contactList={contactList} setContactList={setContactList} />
    </div>
  );
}
export default ContactBook;
