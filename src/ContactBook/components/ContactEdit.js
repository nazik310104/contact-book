import React, { useState, useContext } from "react";
import classes from "../contactBook.module.css";
import { contactBookContext } from "../../ContactBookContext";

export default function ContactEdit(props) {
  const { fullName: contactFullName, id, number: contactNumber } = props.data;

  const [fullName, setFullname] = useState(contactFullName);
  const [number, setNumber] = useState(contactNumber);
  const { changeContact } = useContext(contactBookContext);
  const handleEdit = (e) => {
    e.preventDefault();

    changeContact(id, fullName, number);
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
