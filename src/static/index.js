import img1 from "../assets/images/room.jpg";
import img2 from "../assets/images/room2.jpg";
import img3 from "../assets/images/room3.jpg";
import logo1 from "../assets/icon/img1.png";
import logo2 from "../assets/icon/call.svg";
import logo3 from "../assets/icon/money.svg";
import logo4 from "../assets/icon/Vector.svg";

export const ROOM = [
  {
    id: 1,
    title: "Living Room",
    desc: "Shop Now",
    bg: img1,
  },
  {
    id: 2,
    title: "Bedroom",
    desc: "Shop Now",
    bg: img2,
  },
  {
    id: 3,
    title: "Kitchen",
    desc: "Shop Now",
    bg: img3,
  },
];

export const SERVICE = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Order above $200",
    icon: logo1,
  },
  {
    id: 2,
    title: "Money-back",
    desc: "30 days guarantee",
    icon: logo2,
  },
  {
    id: 3,
    title: "Secure Payments",
    desc: "Secured by Stripe",
    icon: logo3,
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Phone and Email support",
    icon: logo4,
  },
];
