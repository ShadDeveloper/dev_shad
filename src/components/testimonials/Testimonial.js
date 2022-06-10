import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  // image array

  const callouts = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
    {
      avatar: AVTR2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
    {
      avatar: AVTR3,
      name: "Kwanw Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
    {
      avatar: AVTR4,
      name: "Mana Ama McBrown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid corporis tempora nemo delectus commodi repudiandae ipsam beatae, obcaecati dolorum modi. Itaque unde nihil voluptatem magni deleniti accusantium labore velit.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {callouts.map((callout, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={callout.avatar} />
            </div>
            <h5 className="client__name">{callout.name}</h5>
            <small className="client__review">{callout.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
