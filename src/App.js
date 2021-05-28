import React from "react";
import ContactBook from "./ContactBook";
import ContactBookContextProvider from "./ContactBookContext";

function App() {
  return (
    <div className="App">
      <ContactBookContextProvider>
        <ContactBook />
      </ContactBookContextProvider>
    </div>
  );
}

export default App;
