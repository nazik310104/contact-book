import axios from "axios";
import React, { useReducer } from "react";
// import { withSwalInstance } from "sweetalert2-react";
// import swal from "sweetalert2";
// import { ContactBookContext } from "../ContactBookContext";

const INIT_STATE = {
  contactList: [],
  editContactId: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_CONTACTLIST":
      return {
        ...state,
        contactList: action.payload,
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [...state.contactList, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "CHANGE_EDIT_ID":
      return {
        ...state,
        editContactId: action.payload,
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contactList: state.contactList.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export const contactBookContext = React.createContext();

const URL = "http://localhost:3000";

export default function ContactBookContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const fetchContacts = async () => {
    const response = await axios.get(`${URL}/contacts`);
    const contacts = response.data;
    dispatch({
      type: "SET_CONTACTLIST",
      payload: contacts,
    });
  };

  const createContact = async (contact) => {
    const { data } = await axios.post(`${URL}/contacts`, contact);
    // console.log(data);
    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });
  };

  // const showAlert = () => {
  //   const SweetAlert = withSwalInstance(swal);
  //   const [alert, setAlert] = useState(swal);

  //   {
  //     return (
  //       <div>
  //         <button onClick={() => setAlert({ show: true })}>Alert</button>
  //         <SweetAlert
  //           show={alert.show}
  //           title="Demo"
  //           text="SweetAlert in React"
  //           onConfirm={() => setAlert({ show: false })}
  //         />
  //       </div>
  //     );
  //   }
  // };

  const deleteContact = async (id) => {
    await axios.delete(`${URL}/contacts/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  const changeEditId = (id) => {
    dispatch({ type: "CHANGE_EDIT_ID", payload: id });
  };

  const changeContact = async (id, fullName, number) => {
    const { data } = await axios.patch(`${URL}/contacts/${id}`, {
      fullName,
      number,
    });
    dispatch({
      type: "EDIT_CONTACT",
      payload: data,
    });
    changeEditId(null);
  };
  return (
    <contactBookContext.Provider
      value={{
        contactList: state.contactList,
        editId: state.editContactId,
        fetchContacts,
        createContact,
        deleteContact,
        changeEditId,
        changeContact,
        // showAlert,
      }}
    >
      {props.children}
    </contactBookContext.Provider>
  );
}
