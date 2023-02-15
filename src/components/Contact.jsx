import React from "react";

function Contact({name, index}) {
  const isActive = index === 1 ? 'active': '';
  return (
    <li className={`contact ${isActive}`}>
        <div className="icon">{name.charAt(0)}</div>
        {name}
    </li>
  );
}
export default Contact;