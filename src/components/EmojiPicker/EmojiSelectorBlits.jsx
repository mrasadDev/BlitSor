import { useState, useRef, useEffect } from "react";
import EmojiPicker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import data from "@emoji-mart/data";

const EmojiSelectorBlits = ({ onEmojiSelect, onEmojiReply, isReply, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  const togglePicker = () => {
    setIsOpen((prev) => !prev);
  };

  const handleEmojiSelect = (emoji) => {
    if (!emoji || !emoji.native) return; 
    if (isReply) {
      onEmojiReply(emoji.native); 
    } else {
      onEmojiSelect(emoji.native); 
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="position-relative d-inline-block">
      <BsEmojiSmile
        onClick={togglePicker}
        size={25}
        cursor="pointer"
        className="mt-3 ms-2"
        color={color ? "#fff" : "#000"}
      />
      {isOpen && (
        <div
          className="position-absolute z-index-10 bg-white border shadow p-2 rounded"
          style={{ top: "-25rem", left: -340, zIndex:999999999 }}
          ref={pickerRef}
        >
          <EmojiPicker
            data={data}
            onEmojiSelect={handleEmojiSelect}
            theme="light"
          />
        </div>
      )}
    </div>
  );
};

export default EmojiSelectorBlits;
