import React from "react";
import ReactPlayer from "react-player/lazy";
import "./styles/Player.css";

const Player = () => {
  return (
    <div className="player-container">
      <div className="player-youtube">
        <ReactPlayer
          allow="autoplay"
          width={"100%"}
          height={"35rem"}
          muted={true}
          playing={true}
          url={"https://youtu.be/KUHEBXTK0MM"}
          config={{
            youtube: {
              playerVars: { controls: 0, modestbranding: 1, rel: 0 },
            },
          }}
        />
      </div>
      <div className="controlsWrapper">
        <div className="controls-grid">
          <h3>3D / Music / Visuals</h3>
        </div>
      </div>

      <div className="player-soundcloud">
        <ReactPlayer
          width={"500px"}
          height={"100px"}
          url="https://soundcloud.com/dab360/miamargo-scotty-dk-password-dab-omar-massri-rmx"
        />
      </div>
    </div>
  );
};

export default Player;
