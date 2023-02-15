import React from "react";
import { messages, contacts } from "../data";
import Contact  from "./Contact";
import Message from "./Message";

// console.log("Messages:", messages);
// console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {contacts.map((contact, index) => 
            <Contact key={contact.id} index={index} name={contact.name} />
          )}
        </ul>
      </nav>
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
          {messages.map(msg => 
              <Message key={msg.id} type={msg.type} name={msg.name} content={msg.content}/>
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
