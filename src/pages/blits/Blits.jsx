import { useEffect, useRef, useState } from "react";
import { RiThumbDownFill, RiThumbUpFill } from "react-icons/ri";
import { MdInsertComment } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { useDisclosure } from "@mantine/hooks";
import BlitsComments from "./BlitsComments";
import "./style.css";
import BlitsCommentsModal from "./BlitsCommentsModal";

function Short({ short }) {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(short.reaction.isLiked);
  const [isUnLiked, setIsUnLiked] = useState(short.reaction.isUnLiked);
  const [likeCount, setLikeCount] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);
  const [commentsModal, { open: commentsOpen, close: commentsClose }] =
    useDisclosure(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={`reel ${opened ? "mr-40" : ""}`}>
      <BlitsComments opened={opened} closed={close} />
      <BlitsCommentsModal opened={commentsModal} closed={commentsClose} />
      <div className='reel-video'>
        <div className="video">
          <video
            ref={videoRef}
            onClick={() => {
              if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
              } else {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }}
            disableRemotePlayback
            playsInline
            loop
            muted={isMuted}
            src={short.videoUrl}
          ></video>

          {/* Play-Pause Button Overlay */}
          <div
            className={`play-pause ${isPlaying ? "" : "show-play-pause"}`}
            onClick={() => {
              if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
              } else {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }}
          >
            <ion-icon
              name={`${isPlaying ? "pause" : "play"}-outline`}
            ></ion-icon>
          </div>

          {/* Controls */}
          <div className="controls">
            <span
              onClick={() => {
                if (!isPlaying) {
                  videoRef.current.play();
                  setIsPlaying(true);
                } else {
                  videoRef.current.pause();
                  setIsPlaying(false);
                }
              }}
            >
              <ion-icon
                name={`${isPlaying ? "pause" : "play"}-outline`}
              ></ion-icon>
            </span>
            <span
              onClick={() => {
                videoRef.current.muted = !isMuted;
                setIsMuted(!isMuted);
              }}
            >
              <ion-icon
                name={`volume-${isMuted ? "mute" : "medium"}-outline`}
              ></ion-icon>
            </span>
          </div>

          <div className="foot">
            <div className="title">{short.title}</div>
            <div className="user-info">
              <div>
                <img src={short.profileUrl} alt="" />
                <span>{short.username}</span>
              </div>
              {!short.isFollowed && <button>Subscribe</button>}
            </div>
          </div>
        </div>

        {/* Reaction Section */}
        <div className="reaction">
          <div
            className="mt-0"
            onClick={() => {
              setIsLiked(true);
              setIsUnLiked(false);
              setLikeCount((prev) => prev + 1);
            }}
          >
            {isLiked ? (
              <div className="shorts-reacts-like">
                <RiThumbUpFill />
              </div>
            ) : (
              <div className="shorts-reacts">
                <RiThumbUpFill />
              </div>
            )}

            <span className="value">{likeCount}</span>
          </div>
          <div
            className=""
            onClick={() => {
              setIsLiked(false);
              setIsUnLiked(true);
              setLikeCount((prev) => prev - 1);
            }}
          >
            {isUnLiked ? (
              <div className="shorts-reacts-like">
                <RiThumbDownFill />
              </div>
            ) : (
              <div className="shorts-reacts">
                <RiThumbDownFill />
              </div>
            )}
            <span className="value">Dislike</span>
          </div>
          <div className="d-none d-xl-block">
            <div className="shorts-reacts" onClick={open}>
              <MdInsertComment />
            </div>

            <span className="value">{short.reaction.comments}</span>
          </div>
          <div className="d-block d-xl-none">
            <div className="shorts-reacts" onClick={commentsOpen}>
              <MdInsertComment />
            </div>

            <span className="value">{short.reaction.comments}</span>
          </div>

          <div>
            <div className="shorts-reacts">
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </div>
            <span className="value">Share</span>
          </div>
          <div className="shorts-reacts">
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Short;
