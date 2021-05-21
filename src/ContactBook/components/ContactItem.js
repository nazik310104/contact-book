import React from "react";
import editImg from "../icons/pencil.svg";
import cancelImg from "../icons/cancel (2).svg";
import classes from "../contactBook.module.css";

export default function ContactItem(props) {
  const { contact, index, removeContact, handleEditClick } = props;

  return (
    <div style={{ flexDirection: "column" }} key={index}>
      <h1>{contact.fullName}</h1>
      <p>{contact.number}</p>
      <img
        className={classes.cancelIcon}
        src={cancelImg}
        onClick={() => removeContact(index)}
        alt="delete"
      />
      <img
        onClick={() => handleEditClick(index)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </div>
  );
}
