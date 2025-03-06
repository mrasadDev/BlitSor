import { useState } from "react";
import EmojiSelector from "../EmojiPicker/EmojiSelector";

const ReplyForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setText((prevValue) => prevValue + emoji); // Append selected emoji
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div
        style={{
          marginTop: "1rem",
          borderRadius: "10px",
          padding: "15px 0px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          minHeight: "40px",
          cursor: "text",
        }}
        onClick={() => document.getElementById("reply-input").focus()}
      >
        <div>
          <figure className="channel-owner-img me-2">
            <img src="images/channel-1.png" alt="..." />
          </figure>
        </div>
        <input
          id="reply-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            minWidth: "120px",
            borderBottom: "1px solid #ccc",
          }}
          placeholder="Write a reply..."
        />
        <EmojiSelector
          onEmojiReply={(emoji) => handleEmojiSelect(emoji)} // Use the reply handler
          isReply={true}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#FF0045",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "8px",
        }}
      >
        Reply
      </button>
    </form>
  );
};

export default ReplyForm;
