import React, { useContext, useEffect } from "react";
import ContactEdit from "./ContactEdit";
import ContactItem from "./ContactItem";

import classes from "../contactBook.module.css";
import { contactBookContext } from "../../ContactBookContext";

function ContactList(props) {
  const { contactList, fetchContacts, editId } = useContext(contactBookContext);
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className={classes.contactList}>
      {contactList.map((contact) =>
        contact.id === editId ? (
          <ContactEdit data={contact} key={`${contact.id}-edit`} />
        ) : (
          <ContactItem data={contact} key={contact.id} />
        )
      )}
    </ul>
  );
}
export default ContactList;
