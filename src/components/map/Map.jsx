import React from "react";
import "./map.scss";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
  fname: "",
  email: "",
  message: "",
};

const BOT_TOKEN = "7389739361:AAEk_1zcmXzy2ez2Lodapjn005dHBUBWyk4";
const CHAT_ID = "-1001993696687";

const Map = () => {
  const { formData, setFormData, handleChange } = useGetValue(initialState);
  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "Buyurtma:%0A";
    text += `FirstName: <b>${formData.fname}</b>%0A`;
    text += `LastName: <b>${formData.email}</b>%0A%0A`;
    text += `Email Address: <b>${formData.message}</b>%0A`;

    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    console.log("ok");
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFormData(initialState);
  };
  return (
    <div className="map">
      <div className="map__left">
        <form onSubmit={handleSendMessage} action="">
          <label htmlFor="">
            Full Name
            <input
              value={formData.fname}
              onChange={handleChange}
              name="fname"
              placeholder="Full Name"
              type="text"
            />
          </label>
          <label htmlFor="">
            Email address
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email address"
              type="text"
            />
          </label>
          <label htmlFor="">
            message
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
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
