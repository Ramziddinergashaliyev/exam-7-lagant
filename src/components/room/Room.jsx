import React from "react";
import "./room.scss";
import { ROOM } from "../../static";
import { FaArrowRight } from "react-icons/fa6";

const Room = () => {
  const roomData = ROOM?.map((el) => (
    <div
      style={{
        background: `url(${el?.bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="room__card"
    >
      <div className="room__card__info">
        <h3>{el?.title}</h3>
        <p>
          {el?.desc}
          <FaArrowRight />
        </p>
      </div>
    </div>
  ));

  return (
    <div className="room container">
      <div className="room__cards">{roomData}</div>
    </div>
  );
};

export default Room;
