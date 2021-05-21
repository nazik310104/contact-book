import React, { useState } from "react";
import classes from "../contactBook.module.css";

export default function ContactEdit(props) {
  const {
    currentFullName,
    currentNumber,
    contactList,
    setContactList,
    index,
    setEditingContact,
  } = props;

  const [fullName, setFullname] = useState(currentFullName);
  const [number, setNumber] = useState(currentNumber);
  const handleEdit = (e) => {
    e.preventDefault();
    setContactList(
      contactList.map((contact, i) =>
        i === index ? { ...contact, fullName, number } : contact
      )
    );
    setEditingContact(null);
  };

  return (
    <li className={classes.editingContact}>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          name="fullName"
          required
          value={fullName}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          name="number"
          required
          value={number}
        />
        <button>Edit</button>
      </form>
    </li>
  );
}
