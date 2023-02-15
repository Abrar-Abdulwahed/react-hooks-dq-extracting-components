import React from "react";

function Message(probs) {
  return (
    <li className={`message ${probs.type}`}>
        <div className="icon">{probs.name.charAt(0)}</div>
        <span className="content">{probs.content}</span>
    </li>
  );
}
export default Message;