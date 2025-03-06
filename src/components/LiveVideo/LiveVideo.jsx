import {
  Grid,
  Button,
  Text,
  Card,
  Divider,
  Group,
  Image,
  Tooltip,
} from "@mantine/core";
import ReactPlayer from "react-player";
import SimplePage from "../SimplePage";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { RiSettings4Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import EmojiSelector from "../EmojiPicker/EmojiSelector";
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const LiveVideo = () => {
  const [showChat, setShowChat] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const disLikeCount = useState(0);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedGift, setSelectedGift] = useState(null);
  const scrollContainerRef = useRef(null);
  const [coinCount, setCoinCount] = useState(0);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInputValue((prev) => prev + emoji);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSelectGift = (gift) => {
    console.log(gift, "Selected Gift:");
    setSelectedGift((prev) => (prev === gift ? null : gift)); // Toggle selection
  };

  const handleSendGift = () => {
    if (selectedGift) {
      console.log(selectedGift, "selectedGift");
      setMessages([...messages, { image: selectedGift, type: "image" }]);
      setSelectedGift(null);
      setCoinCount((prev) => prev + 1);
    }
  };

  const giftImages = [
    { id: 1, image: "/images/football 1.png" },
    { id: 2, image: "/images/gold-medal 1.png" },
    { id: 3, image: "/images/headset 2.png" },
    { id: 4, image: "/images/heart 1.png" },
    { id: 5, image: "/images/joystick 2.png" },
    { id: 6, image: "/images/vr-technology 1.png" },
    { id: 7, image: "/images/winking-face 1.png" },
    { id: 8, image: "/images/neon-star (1) 2.png" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const handleLike = () => setLikeCount((prev) => prev + 1);
  const handleUnlike = () => setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));

  console.log(messages, "selectedGift");

  return (
    <SimplePage>
      <Grid gutter="md">
        <Grid.Col
          span={{
            xs: 12,
            sm: 12,
            md: 12,
            lg: showChat ? 7 : 12,
          }}
        >
          <div className="position-relative p-4 rounded-lg">
            <div style={{ textAlign: "end" }}>
              {!showChat && (
                <Button
                  onClick={() => setShowChat(true)}
                  className=" text-white rounded-full cursor-pointer shadow-md z-10"
                  size="xs"
                >
                  <FaArrowLeftLong size={20} />
                </Button>
              )}
            </div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=9O-Ds20IkH8"
              width="100%"
              height="450px"
              controls
            />
            <Text className="video-title my-3">{data?.cardTitle}</Text>
            <Grid className="video-channel mb-2 ">
              <Grid.Col span={5}>
                <div
                  className="channel-name d-flex align-items-center"
                  onClick={() => navigate("/channel-detail")}
                >
                  <figure className="channel-owner-img me-2">
                    <img src="images/channel-1.png" alt="..." />
                  </figure>
                  <div>
                    <h5 className="mb-0">{data?.channelName}</h5>
                    <span>18.7k followers</span>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ lg: 7 }}>
                <Grid>
                  <Grid.Col span={11}>
                    <div className="text-end">
                      <Button className="redBtn px-3 mt-0" onClick={handleLike}>
                        <Text mr={10} mt={1}>
                          {likeCount}
                        </Text>
                        {likeCount > 0 ? (
                          <AiFillLike size={20} cursor="pointer" />
                        ) : (
                          <AiOutlineLike size={20} cursor="pointer" />
                        )}
                      </Button>
                      <Button
                        className="redBtn px-3 mt-0"
                        onClick={handleUnlike}
                      >
                        {disLikeCount > 0 ? (
                          <AiFillDislike size={20} cursor="pointer" />
                        ) : (
                          <AiOutlineDislike size={20} cursor="pointer" />
                        )}
                      </Button>
                      <Button className="redBtn px-3 mt-0"> Save</Button>
                      <Button className="redBtn px-3 mt-0 subscribe-btn">
                        Subscribe
                      </Button>
                      <BsThreeDotsVertical />
                    </div>
                  </Grid.Col>
                  <Grid.Col span={1}>
                    <BsThreeDotsVertical className="responsive-btn" />
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </div>
        </Grid.Col>

        {showChat && (
          <Grid.Col span={{ xs: 8, sm: 6, md: 6, lg: 5 }} mt={20}>
            <Card
              shadow="sm"
              p="lg"
              radius="lg"
              withBorder
              style={{
                backgroundColor: "#e5e7eb",
                height: "570px",
                display: "flex",
                flexDirection: "column",
                overflow: "visible",
                position: "relative",
              }}
            >
              <div
                onClick={() => setShowChat(false)}
                className="text-white rounded-full cursor-pointer shadow-md z-10"
                size="xs"
                style={{
                  backgroundColor: "#D9D9D9",
                  padding: "5px",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "50%",
                  left: "-1px",
                  cursor: "pointer",
                }}
              >
                <FaChevronRight size={20} color="red" />
              </div>
              <Button
                className="bg-blue-500 hover:bg-blue-600 mt-2"
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%",
                  position: "relative",
                  color: "#2F2D2D",
                  backgroundColor: "#D9D9D9",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "13px",
                  letterSpacing: "2px",
                }}
              >
                BLITSCHAT
              </Button>

              <Divider mt={20} />

              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "10px",
                  marginTop: "10px",
                  backgroundColor: "#e5e7eb",
                  borderRadius: "10px",
                }}
              >
                <div
                  ref={scrollContainerRef}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    overflowY: "scroll",
                    maxHeight: "275px",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                  className="scroll-container"
                >
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      style={{
                        color: "#fff",
                        padding: "1px 12px",
                        margin: "3px 0",
                        borderRadius: "10px",
                        alignSelf: "flex-start",
                        maxWidth: "100%",
                      }}
                    >
                      <Grid>
                        <GoDotFill
                          color="black"
                          style={{ marginTop: "11px" }}
                        />
                        <Grid.Col span={6}>
                          <div className="d-flex align-items-start">
                            <Text
                              className="comments"
                              style={{
                                color: "red",
                                fontSize: "17px",
                                whiteSpace: "nowrap",
                              }}
                              size="md"
                            >
                              Abcd:
                            </Text>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "5px",
                              }}
                            >
                              {message.type === "image" ? (
                                <>
                                  <p
                                    style={{
                                      width: "22vw",
                                      color: "#2F2D2D",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    {message.text}
                                  </p>
                                  <img
                                    src={message.image.image}
                                    alt="Gift"
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </>
                              ) : (
                                <p
                                  style={{
                                    width: "22vw",
                                    color: "#2F2D2D",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {message}
                                </p>
                              )}
                            </div>
                          </div>
                        </Grid.Col>
                      </Grid>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  gap: "10px",
                  marginTop: "10px",
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  placeholder="Send a Message"
                  className="p-2 text-white"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "#D9D9D9",
                    color: "#D9D9D9",
                    zIndex: "50px",
                  }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-7px",
                    left: "calc(100% - 50px)",
                    zIndex: 1000,
                  }}
                >
                  <EmojiSelector
                    onEmojiSelect={handleEmojiSelect}
                    isReply={false}
                    color={false}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div className="d-flex">
                    <img src="/images/bitcoin.png" width="25px" />
                    <p>{coinCount}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RiSettings4Line
                      size={30}
                      color="#2F2D2D"
                      style={{
                        marginRight: "1rem",
                        marginTop: "5px",
                        cursor: "pointer",
                      }}
                    />
                    <Button
                      className="bg-red-500 hover:bg-red-600"
                      style={{
                        borderRadius: "10px",
                        padding: "10px",
                        textAlign: "center",
                      }}
                      onClick={handleSendMessage}
                    >
                      Chat
                    </Button>
                  </div>
                </div>
                {/* Send a Gift Button */}
                <Button
                  className="bg-blue-500 hover:bg-blue-600 mt-2"
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    position: "relative",
                    backgroundColor: "#D9D9D9",
                    color: "#2F2D2D",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "13px",
                  }}
                  onClick={handleSendGift}
                  disabled={!selectedGift}
                >
                  Send a Gift
                </Button>
                {/* Gift Selection Grid */}
                <div style={{ position: "absolute", bottom: "-80px" }}>
                  <Group justify="center">
                    <Tooltip label="This is a gift!" position="top" withArrow>
                      <Image
                        src="/images/Polygon 1.png"
                        alt="Gift"
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                          borderRadius: "10px",
                          position: "absolute",
                          right: "50%",
                          top: "-15px",
                        }}
                      />
                    </Tooltip>
                  </Group>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#D9D9D9",
                      padding: "5px",
                      borderRadius: "10px",
                      position: "relative",
                    }}
                  >
                    {giftImages.map((gift, index) => (
                      <div
                        key={index}
                        style={{
                          textAlign: "center",
                          borderRight: "2px solid #fff",
                          padding: "8px",
                        }}
                      >
                        <Tooltip
                          label={`${coinCount}`}
                          position="top"
                          withArrow
                        >
                          <img
                            src={gift.image}
                            alt="Gift"
                            style={{
                              width: "30px",
                              height: "30px",
                              cursor: "pointer",
                              borderRadius: "10px",
                              border:
                                selectedGift?.id === gift.id
                                  ? "2px solid red"
                                  : "2px solid transparent",
                              transition: "border 0.2s ease-in-out",
                            }}
                            onClick={() => handleSelectGift(gift)}
                          />
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Grid.Col>
        )}
      </Grid>
      <Grid>
        <Grid.Col ml={20} mt={60}>
          <div className="video-tags channel-tag">
            <ul className="list-unstyled mb-0">
              <li>Gaming</li>
              <li>Live Stream</li>
              <li>Gameplay</li>
              <li>unboxingdota</li>
              <li>2024</li>
              <li>Challenge</li>
            </ul>
          </div>
          <Text>About Sarah Johnson</Text>
          <div className="video-about mt-2">
            <p className="mb-0">
              Welcome to my steram! i am Sarah and today i’ll be playing dota 2
              on a live stream with my crew, will try to <br />
              continue the rhythm as of yesterday but no promises!
              <br />
              Please Join me and Subscribe to my channel for more and fun
              playing stream, also don’t forget to follow <br /> me on my social
              links
              <br />
              Become A Member :-
              <br />
              Link 1
              <br />
              Link 2
            </p>
          </div>
        </Grid.Col>
      </Grid>
    </SimplePage>
  );
};

export default LiveVideo;
