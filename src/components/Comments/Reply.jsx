import { useState } from "react";
import ReplyForm from "./ReplyForm";
import { Box, Grid, Group, Text } from "@mantine/core";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Collapse } from "@mantine/core";

const Reply = ({ comment, onReply, isNested = false }) => {
  const [likes, setLikes] = useState(0);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [opened, setOpened] = useState(true);

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleUnlike = () => setLikes((prev) => (prev > 0 ? prev - 1 : 0));
  const toggleReplyForm = () => setShowReplyForm((prev) => !prev);
  const toggleReplies = () => setOpened((prev) => !prev);

  return (
    <div className={`rounded-md ${isNested ? "" : "pl-4"}`}>
      <Grid>
          <figure className="channel-owner-img mt-4">
            <img src="images/vid-1.png" alt="User" />
          </figure>
        <Grid.Col span={6}>
          <Text className="fw-bold comments">abcd@gmail.com • 1 month ago</Text>
          <div style={{ width: "35vw" }}>
            <p style={{ width: "100%", wordWrap: "break-word" }}>
              {comment.text}
            </p>
          </div>
          <Group spacing="md">
            <AiOutlineLike size={20} cursor="pointer" onClick={handleLike} />
            <Text>{likes}</Text>
            <AiOutlineDislike
              size={20}
              cursor="pointer"
              onClick={handleUnlike}
            />
            <Text
              className="reply-btn"
              onClick={toggleReplyForm}
              style={{ cursor: "pointer" }}
            >
              Reply
            </Text>
          </Group>
        </Grid.Col>
      </Grid>

      {showReplyForm && (
        <ReplyForm
          onSubmit={(text) => {
            onReply(comment.id, text);
            setShowReplyForm(false);
          }}
        />
      )}

      {/* Replies Section */}
      {comment.replies.length > 0 && (
        <Box maw={1400} mx="auto">
          {!isNested && ( // Show toggle only for first-level replies
            <Group mb={5}>
              <Text
                onClick={toggleReplies}
                style={{ color: "blue", cursor: "pointer" }}
              >
                <div className="flex items-center">
                  {opened ? (
                    <FaChevronUp size={15} />
                  ) : (
                    <FaChevronDown size={15} />
                  )}
                  <span className="ms-1">{comment.replies.length} replies</span>
                </div>
              </Text>
            </Group>
          )}

          <Collapse in={isNested || opened} className="ml-1">
            {comment.replies.map((reply) => (
              <Reply
                key={reply.id}
                comment={reply}
                onReply={onReply}
                isNested={true} // Pass isNested for all nested replies
              />
            ))}
          </Collapse>
        </Box>
      )}
    </div>
  );
};

export default Reply;
