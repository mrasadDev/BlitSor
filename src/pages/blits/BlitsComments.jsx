import {
  ActionIcon,
  Drawer,
  Grid,
  Text,
  Avatar,
  Collapse,
} from "@mantine/core";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import EmojiSelectorBlits from "../../components/EmojiPicker/EmojiSelectorBlits";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const BlitsComments = ({ opened, closed }) => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const [replyTexts, setReplyTexts] = useState({});
  const [replyOpened, setReplyOpened] = useState({});

  const toggleReplies = (commentId) => {
    setReplyOpened((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  const addCommentOrReply = (parentId, text) => {
    if (!text.trim()) return;

    setComments((prevComments) => {
      const addReplyRecursively = (commentsArray) => {
        return commentsArray.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now(), text, replies: [] },
              ],
            };
          } else if (comment.replies.length > 0) {
            return {
              ...comment,
              replies: addReplyRecursively(comment.replies),
            };
          }
          return comment;
        });
      };

      return parentId
        ? addReplyRecursively(prevComments)
        : [{ id: Date.now(), text, replies: [] }, ...prevComments];
    });

    setReplyTexts((prev) => ({ ...prev, [parentId]: "" }));
    setReplyInputs((prev) => ({ ...prev, [parentId]: false }));
  };

  const toggleReplyInput = (id) => {
    setReplyInputs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLike = (id) => {
    setComments((prevComments) => {
      const likeRecursively = (commentsArray) => {
        return commentsArray.map((comment) => {
          if (comment.id === id) {
            return { ...comment, likes: comment.likes + 1 };
          } else if (comment.replies.length > 0) {
            return { ...comment, replies: likeRecursively(comment.replies) };
          }
          return comment;
        });
      };
      return likeRecursively(prevComments);
    });
  };

  const handleUnLike = (id) => {
    setComments((prevComments) => {
      const likeRecursively = (commentsArray) => {
        return commentsArray.map((comment) => {
          if (comment.id === id) {
            return { ...comment, likes: comment.likes - 1 };
          } else if (comment.replies.length > 0) {
            return { ...comment, replies: likeRecursively(comment.replies) };
          }
          return comment;
        });
      };
      return likeRecursively(prevComments);
    });
  };

  const getTotalRepliesCount = (comment) => {
    if (!comment.replies || comment.replies.length === 0) {
      return 0;
    }
  
    let totalReplies = comment.replies.length;
  
    comment.replies.forEach((reply) => {
      totalReplies += getTotalRepliesCount(reply); 
    });
  
    return totalReplies;
  };

  const renderComment = (comment, level = 0) => {
    const totalReplies = getTotalRepliesCount(comment);

    return (
      <div
        key={comment.id}
        style={{
          marginLeft: level === 0 ? "0rem" : level === 1 ? "1rem" : "",
          paddingTop: "5px",
        }}
      >
        <Grid align="center" className="d-flex gap-4 p-2">
          <Avatar src="images/vid-1.png" size="md" />
          <Text style={{ fontSize: "12px", marginLeft: "13px" }}>
            @example.com . 1 week ago
          </Text>
        </Grid>
        <p style={{ marginLeft: "3rem" }}>{comment.text}</p>

        <div
          className="d-flex align-items-center gap-3"
          style={{ marginLeft: "3rem" }}
        >
          <AiOutlineLike
            size={20}
            cursor="pointer"
            onClick={() => handleLike(comment.id)}
          />
          <Text size="sm">{comment.likes}</Text>
          <AiOutlineDislike
            size={20}
            cursor="pointer"
            onClick={() => handleUnLike(comment.id)}
          />
          <Text
            className="reply-btn"
            onClick={() => toggleReplyInput(comment.id)}
            style={{ cursor: "pointer" }}
          >
            Reply
          </Text>
        </div>

        <div className="ms-3 mt-1">
          {comment.replies.length > 0 && level === 0 && (
            <Text
              className="collapse-toggle"
              onClick={() => toggleReplies(comment.id)}
              style={{
                cursor: "pointer",
                color: "blue",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              {replyOpened[comment.id] ? (
                <FaChevronUp size={15} />
              ) : (
                <FaChevronDown size={15} />
              )}
               <span className="ms-1">{totalReplies} replies</span>
            </Text>
          )}
        </div>

        {replyInputs[comment.id] && (
          <div style={{ marginLeft: "2rem", marginTop: "5px" }}>
            <div
              style={{
                marginTop: "8px",
                position: "relative",
                marginBottom: "5px",
              }}
            >
              <input
                style={{ borderBottom: "1px solid gray", width: "15vw" }}
                placeholder="Reply..."
                value={replyTexts[comment.id] || ""}
                onChange={(e) =>
                  setReplyTexts((prev) => ({
                    ...prev,
                    [comment.id]: e.target.value,
                  }))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addCommentOrReply(comment.id, e.target.value);
                  }
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "calc(100% - 50px)",
                  zIndex: 99999,
                }}
              >
                <EmojiSelectorBlits
                  onEmojiReply={(emoji) => {
                    setReplyTexts((prev) => {
                      const updatedText = (prev[comment.id] || "") + emoji;
                      return { ...prev, [comment.id]: updatedText };
                    });
                  }}
                  isReply={true}
                  color={false}
                />
              </div>
              <div
                onClick={() => toggleReplyInput(comment.id)}
                style={{
                  backgroundColor: "lightgrey",
                  display: "inline",
                  padding: "5px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                cancel
              </div>
            </div>
          </div>
        )}

        {level === 0 ? (
          <Collapse in={replyOpened[comment.id]}>
            <div>
              {comment.replies.map((reply) => renderComment(reply, level + 1))}
            </div>
          </Collapse>
        ) : (
          comment.replies.map((reply) => renderComment(reply, level + 1))
        )}
      </div>
    );
  };

  return (
    <Drawer
      opened={opened}
      onClose={closed}
      title={
        <div className="d-flex justify-content-between">
          <h3>Comments</h3>
          <div style={{ marginLeft: "12rem" }}>
            <ActionIcon variant="subtle">
              <BsFilterLeft size={20} />
            </ActionIcon>
            <ActionIcon variant="subtle" onClick={closed}>
              <IconX size={20} />
            </ActionIcon>
          </div>
        </div>
      }
      position="right"
      offset={45}
      radius={30}
      withOverlay={false}
      withCloseButton={false}
      withinPortal={true}
      size="md"
      shadow="md"
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingBottom: "60px",
          maxHeight: "450px",
        }}
      >
        {comments.map((comment) => renderComment(comment))}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "95%",
          padding: "10px",
          background: "#fff",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar src="images/vid-1.png" size="md" />
        <input
          type="text"
          placeholder="Add a comment..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            marginLeft: "10px",
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addCommentOrReply(null, inputValue);
              setInputValue("");
            }
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "calc(100% - 50px)",
            zIndex: 1000,
          }}
        >
          <EmojiSelectorBlits
            onEmojiSelect={(emoji) => setInputValue((prev) => prev + emoji)}
            isReply={false}
            color={false}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default BlitsComments;
