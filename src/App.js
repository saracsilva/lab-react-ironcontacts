import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>

            <th>Name</th>

            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} width="80px" />
                </td>
                <td>
                  <h5>{contact.name} </h5>
                </td>
                <td>
                  <h5>{contact.popularity.toFixed(2)} </h5>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
