import React from "react";
import { messages, contacts } from "../data";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {contacts.map(contact => 
            <li className="contact" key={contact.id}>
              <div className="icon">{contact.name.charAt(0)}</div>
              {contact.name}
            </li>
          )}
        </ul>
      </nav>
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
          {messages.map(msg => 
              <li className={`message ${msg.type}`} key={msg.id}>
              <div className="icon">{msg.name.charAt(0)}</div>
              <span className="content">{msg.content}</span>
            </li>
          )}
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
