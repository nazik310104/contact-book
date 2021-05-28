import React, { useContext } from "react";
import editImg from "../icons/pencil.svg";
import cancelImg from "../icons/cancel (2).svg";
import classes from "../contactBook.module.css";
import { contactBookContext } from "../../ContactBookContext";

export default function ContactItem(props) {
  const { fullName, number, id } = props.data;
  const { deleteContact, changeEditId } = useContext(contactBookContext);

  const handleDelete = () => {
    // showAlert();
    deleteContact(id);
  };

  return (
    <div style={{ flexDirection: "column" }} key={`${id}-contact`}>
      <h1>{fullName}</h1>
      <p>{number}</p>
      <img
        className={classes.cancelIcon}
        src={cancelImg}
        onClick={handleDelete}
        alt="delete"
      />
      <img
        onClick={() => changeEditId(id)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </div>
  );
}
