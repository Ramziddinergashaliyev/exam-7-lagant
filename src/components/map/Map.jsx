import React from "react";
import "./map.scss";

const Map = () => {
  return (
    <div className="map">
      <div className="map__left">
        <form action="">
          <label htmlFor="">
            Full Name
            <input placeholder="Full Name" type="text" />
          </label>
          <label htmlFor="">
            Email address
            <input placeholder="Email address" type="text" />
          </label>
          <label htmlFor="">
            message
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button>Send Message</button>
        </form>
      </div>
      <div className="map__right">
        <iframe
          className="map__right-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23985.45770465206!2d69.20430049999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1721845904788!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
