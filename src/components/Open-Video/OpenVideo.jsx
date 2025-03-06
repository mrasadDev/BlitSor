import SimplePage from "../SimplePage";
import { Grid, Text, Button} from "@mantine/core";
import ReactPlayer from "react-player";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.css";
import RecmendedVideo from "../recomended-card/RecmendedVideo";
import { recomendedVideoData } from "../../data/RecomendedData";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommentsList from "../Comments/CommentList";

const OpenVideo = () => {
  const [likeCount, setLikeCount] = useState(0);
  const disLikeCount = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const handleLike = () => setLikeCount((prev) => prev + 1);
  const handleUnlike = () => setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));




  return (
    <>
      <SimplePage>
        <Grid className="mb-4">
          <Grid.Col
            span={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 7,
            }}
          >
            <div className="position-relative">
              <ReactPlayer
                controls={true}
                className="video-player"
                url="https://youtu.be/9O-Ds20IkH8?si=-3TQC2y2XNCY6B2C"
              />
            </div>
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
                      <Button
                        className="redBtn px-3 mt-0"
                        onClick={handleLike}
                      >
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
            <div className="mb-5">
               <CommentsList />
            </div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 12, md: 12, lg: 5 }}>
            {recomendedVideoData.map((data) => {
              return (
                <div key={data.id}>
                  <RecmendedVideo
                    data={data}
                    navigateTo={() =>
                      navigate("/recommended-video-detail", { state: data })
                    }
                  />
                </div>
              );
            })}
          </Grid.Col>
        </Grid>
      </SimplePage>
    </>
  );
};

export default OpenVideo;
