import React from "react";
import SimplePage from "../../components/SimplePage";
import { Grid, Text, Button, rem } from "@mantine/core";
import ReactPlayer from "react-player";
import { FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.css";
import RecmendedVideo from "../recomended-card/RecmendedVideo";
import { recomendedVideoData } from "../../data/RecomendedData";

const OpenVideo = () => {
  // import { BsEmojiWink } from "react-icons/bs";
  // const emojiWink = (
  //   <>
  //     <BsEmojiWink
  //       style={{
  // borderLeft: "1px solid #ccc",
  //         paddingLeft: "7px",
  //         width: rem(20),
  //         height: rem(20),
  //       }}
  //     />
  //   </>
  // );

  return (
    <>
      <SimplePage>
        <Grid className="mb-4">
          <Grid.Col
            span={{
              xs: 12,
              sm: 6,
              lg: 8,
            }}
          >
            <div className="position-relative">
              <ReactPlayer
                controls={true}
                className="video-player"
                url="https://youtu.be/9O-Ds20IkH8?si=-3TQC2y2XNCY6B2C"
                // url="videos/video-1.mp4"
              />
            </div>
            <Text className="video-title my-3">
              Newly Released Attack on Titan Gameplay Live Full Walkthrough |
              Sarah Johnson
            </Text>
            <Grid className="video-channel mb-2 ">
              <Grid.Col span={{ lg: 6 }}>
                <div className="channel-name d-flex align-items-center">
                  <figure className="avatar me-2">
                    <img src="images/channel-1.png" alt="..." />
                  </figure>
                  <div className="">
                    <h5 className="mb-0">Sarah Johnson</h5>
                    <span>18.7k followers</span>
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col span={{ lg: 6 }}>
                <div className="text-end">
                  <Button className="redBtn px-3 mt-0">
                    <FaBell />
                  </Button>
                  <Button className="redBtn px-3 mt-0">Follow</Button>
                  <Button className="redBtn px-3 mt-0">Subscribe</Button>
                  <BsThreeDotsVertical />
                </div>
              </Grid.Col>
            </Grid>
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
                Welcome to my steram! i am Sarah and today i’ll be playing dota
                2 on a live stream with my crew, will try to <br />
                continue the rhythm as of yesterday but no promises!
                <br />
                Please Join me and Subscribe to my channel for more and fun
                playing stream, also don’t forget to follow <br /> me on my
                social links
                <br />
                Become A Member :-
                <br />
                Link 1
                <br />
                Link 2
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 5, lg: 4 }}>
            {/* <div className="chat-box">
              <ScrollArea h={450}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Button className="redBtn px-3 mt-0">
                      <FaArrowRight />
                    </Button>
                    <Text className="chat-box-heading ">Stream Chat</Text>
                  </div>
                  <div>
                    <RiGift2Fill className="chat-box-icon me-2" />
                    <PiCrownSimpleFill className="chat-box-icon" />
                  </div>
                </div>
                <Divider className="my-3" />
                <div className="mb-2 sigle-person-chat d-flex align-items-center">
                  <figure className="chat-avatar me-2">
                    <img src="images/channel-1.png" alt="..." />
                  </figure>
                  <div className="">
                    <Text className="mb-0">
                      John Jr <span className="chat-time">2:31</span>
                    </Text>
                    <p className="mb-0 chat-para">This is Dope 👌</p>
                  </div>
                </div>
                <div className="mb-2 sigle-person-chat d-flex align-items-center">
                  <figure className="chat-avatar me-2">
                    <img src="images/About-Channel-Porfile.png" alt="..." />
                  </figure>
                  <div className="">
                    <Text className="mb-0">
                      Amanda Smith <span className="chat-time">2:32</span>
                    </Text>
                    <p className="mb-0 chat-para">
                      I wanted to their reaction though 😭
                    </p>
                  </div>
                </div>
                <div className="mb-2 sigle-person-chat d-flex align-items-center">
                  <figure className="chat-avatar me-2">
                    <img src="images/channel-1.png" alt="..." />
                  </figure>
                  <div className="">
                    <Text className="mb-0">
                      Garry Mitchells <span className="chat-time">2:34</span>
                    </Text>
                    <p className="mb-0 chat-para">Hey i didn’t knew that 😂</p>
                  </div>
                </div>
                <div className="mb-2 sigle-person-chat d-flex align-items-center">
                  <figure className="chat-avatar me-2">
                    <img src="images/avatar-you.jpg" alt="..." />
                  </figure>
                  <div className="">
                    <Text className="mb-0 text-pink">
                      Amaan BhatTi (You) <span className="chat-time">5:41</span>
                    </Text>
                    <p className="mb-0 chat-para">The Developers ❣</p>
                  </div>
                </div>
              </ScrollArea>
              <TextInput
                className="chat-input"
                placeholder="Send a Message"
                variant="filled"
                rightSection={emojiWink}
                radius={10}
              />
              <div className="mt-2 d-flex align-items-center justify-content-between text-white">
                <Text className="chat-count">0/512</Text>
                <div className="text-end">
                  <TbSettings className="me-2 chat-box-icon" />
                  <Button className="redBtn px-3 mt-0 me-0">Send</Button>
                </div>
              </div>
            </div> */}
            {/* <div className="recomended-video d-flex align-items-center">
              <figure className="recomended-img pe-2">
                <img src="images/thumbnail-1.png" alt=".." />
              </figure>
              <div className="recomended-content">
                <h5 className="mb-1">Pubg GamePlay</h5>
                <Text className="channel-name">Cahnnel Name</Text>
                <span>
                  1M Views <BsDot /> 1 Year ago
                </span>
              </div>
            </div> */}
            {recomendedVideoData.map((data) => {
              return (
                <RecmendedVideo
                  vidImg={data.vidImg}
                  videoTitle={data.videoTitle}
                  channelName={data.channelName}
                  views={data.views}
                  uploadTime={data.uploadTime}
                />
              );
            })}
          </Grid.Col>
        </Grid>
      </SimplePage>
    </>
  );
};

export default OpenVideo;
