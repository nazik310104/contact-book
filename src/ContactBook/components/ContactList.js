import React, { useState } from "react";
import ContactEdit from "./ContactEdit";
import ContactItem from "./ContactItem";

import classes from "../contactBook.module.css";

function ContactList(props) {
  const { contactList, setContactList } = props;
  const [editingContact, setEditingContact] = useState(null);
  const removeContact = (index) => {
    setContactList(contactList.filter((_, i) => i !== index));
  };
  const handleEditClick = (index) => {
    setEditingContact(index);
  };

  return (
    <ul className={classes.contactList}>
      {contactList.map((contact, index) =>
        index === editingContact ? (
          <ContactEdit
            currentFullName={contact.fullName}
            currentNumber={contact.number}
            contactList={contactList}
            setContactList={setContactList}
            index={index}
            setEditingContact={setEditingContact}
          />
        ) : (
          <ContactItem
            contact={contact}
            index={index}
            removeContact={removeContact}
            handleEditClick={handleEditClick}
          />
        )
      )}
    </ul>
  );
}
export default ContactList;
