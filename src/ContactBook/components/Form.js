import React, { useState } from "react";
import classes from "../contactBook.module.css";
function Form(props) {
  const { contactList, setContactList } = props;
  const [number, setNumber] = useState("");
  const [fullName, setFullname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactList([...contactList, { number, fullName }]);
    setNumber("");
    setFullname("");
  };
  return (
    <div className={classes.formWrapper}>
      <h3>Contact Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFullname(e.target.value)}
          placeholder="FullName"
          name="fullName"
          type="text"
          required
          value={fullName}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          name="number"
          type="text"
          required
          value={number}
        />
        <button>Create</button>
        {/* <pre>{JSON.stringify(contactList, 0, 2)}</pre> */}
      </form>
    </div>
  );
}
export default Form;
