import {
  ActionIcon,
  Grid,
  Text,
  Avatar,
  TextInput,
  Modal,
  Collapse,
} from "@mantine/core";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import EmojiSelectorBlits from "../../components/EmojiPicker/EmojiSelectorBlits";

const BlitsCommentsModal = ({ opened, closed }) => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const [collapsedReplies, setCollapsedReplies] = useState({});

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
                { id: Date.now(), text, likes: 0, replies: [] },
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
        : [{ id: Date.now(), text, likes: 0, replies: [] }, ...prevComments];
    });

    setReplyInputs((prev) => ({ ...prev, [parentId]: false }));
    setCollapsedReplies((prev) => ({ ...prev, [parentId]: true }));
  };

  const toggleReplyInput = (id) => {
    setReplyInputs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleReplyCollapse = (id) => {
    setCollapsedReplies((prev) => ({ ...prev, [id]: !prev[id] }));
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

  const renderComments = (commentsArray, level = 0) => {
    return commentsArray.map((comment) => {
      return (
        <div key={comment.id}>
          {/* Main Comment Box */}
          <div
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
              {comment.replies.length > 0 && (
                <Text
                  className="collapse-toggle"
                  onClick={() => toggleReplyCollapse(comment.id)}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    fontSize: "12px",
                    marginLeft: "10px",
                  }}
                >
                  {collapsedReplies[comment.id] ? (
                    <FaChevronUp size={15} />
                  ) : (
                    <FaChevronDown size={15} />
                  )}
                  <span className="ms-1">{comment.replies.length} replies</span>
                </Text>
              )}
            </div>
          </div>

          {/* Reply Input Box */}
          <div style={{ marginLeft: "2rem", marginTop: "5px" }}>
            {replyInputs[comment.id] && (
              <div style={{ marginTop: "5px" }}>
                <TextInput
                  placeholder="Reply..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addCommentOrReply(comment.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Replies Section with Collapse */}
          <Collapse in={collapsedReplies[comment.id]}>
            {comment.replies.length > 0 && (
              <div
                style={{ borderLeft: "2px solid #ddd", paddingLeft: "10px" }}
              >
                {renderComments(comment.replies, level + 1)}
              </div>
            )}
          </Collapse>
        </div>
      );
    });
  };
  return (
    <Modal
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
      centered
      offset={45}
      radius={30}
      withCloseButton={false}
      size="md"
      shadow="md"
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingBottom: "60px",
          maxHeight: "450px",
          display: "flex",
          flexDirection: "column",
        }}
        className="scroll-container"
      >
        {renderComments(comments)}
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
          zIndex: "999",
        }}
      >
        <Avatar src="images/vid-1.png" size="md" />
        <input
          type="text"
          placeholder="Add a comment..."
          value={inputValue}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            marginLeft: "10px",
          }}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addCommentOrReply(null, inputValue);
              setInputValue(""); // Clear input
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
    </Modal>
  );
};

export default BlitsCommentsModal;
