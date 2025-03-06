import { Text } from "@mantine/core";
import EmojiSelector from "../EmojiPicker/EmojiSelector";
import { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setText((prev) => prev + emoji); // Append only the selected emoji
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <Text
        className="fw-bold"
        style={{ marginTop: "3rem", fontSize: "1.7rem" }}
      >
        Comments
      </Text>
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
        onClick={() => document.getElementById("comment-input").focus()}
      >
        <div>
          <figure className="channel-owner-img me-2">
            <img src="images/channel-1.png" alt="..." />
          </figure>
        </div>
        <input
          id="comment-input"
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
          placeholder="Add a comment..."
        />
        <EmojiSelector
          onEmojiSelect={handleEmojiSelect}
          isReply={false}
          color={false}
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
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
