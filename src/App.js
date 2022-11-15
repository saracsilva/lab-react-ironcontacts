import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const firstFive = contactsJSON.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);
  contactsJSON = contactsJSON.slice(5);
  function addRandomContact() {
    let randomIndex = Math.floor(Math.random() * contactsJSON.length);
    let randomContact = contactsJSON[randomIndex];
    setContacts([...contacts, randomContact]);
    contactsJSON.splice(randomIndex, 1);
  }
  return (
    <div className="App">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>

            <th>Name</th>

            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width="80px" alt="Yes" />
                </td>
                <td>
                  <h5>{contact.name} </h5>
                </td>
                <td>
                  <h5>{contact.popularity.toFixed(2)} </h5>
                </td>
                {contact.wonOscar === true && (
                  <td>
                    <h5>🏆</h5>
                  </td>
                )}

                {contact.wonEmmy === true && (
                  <td>
                    <h5>🏆</h5>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
