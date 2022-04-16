import React from "react";
import './App.css';
import Header from "./Headers";
import AddContact from "./AddContact";
import ContactList from "./ContactList"


function App() {

const contacts = [
  {
    id:"1",
    "name":"Femi",
    "email":"oniseikeji@gmail.com",

  },
  {
    id:"2",
    "name":"Wilson",
    "email":"oniseikeji@gmail.com",

  }
]

  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts = {contacts} />
    
    </div>
  );
}

export default App;
