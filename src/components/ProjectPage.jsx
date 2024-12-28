import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ProjectPage = () => {
  const location = useLocation();

  const state = location.state;

  return (
    <>
      <aside>
        <h2>Project Details</h2>
        {state.liveLink && (
          <a href={state.liveLink} target="_blank">
            View Demo
          </a>
        )}
        <a href={state.sourceCode} target="_blank">
          View on GitHub
        </a>
        <p>Technology Stack:</p>
        <ul>
          {state.techStack.map((tech) => (
            <li key={uuidv4()}>{tech}</li>
          ))}
        </ul>
      </aside>
      <main>
        <h1>{state.title}</h1>
        <p>Date Completed: {state.date}</p>
        <p>{state.description}</p>
        <img src={state.mainImg.src} alt={state.mainImg.alt} />
        <h2>Key Features</h2>
        <ul>
          {state.features.map((feature) => (
            <li key={uuidv4()}>{feature}</li>
          ))}
        </ul>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop
        >
          {Object.entries(state.carousel).map(([key, value]) => (
            <SwiperSlide key={key}>
              <img src={value.src} alt={value.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p>
          If you're interested in collaborating or want to learn more about my
          work, feel free to reach out!
        </p>
        <Link to="/contact">Get In Touch</Link>
      </main>
    </>
  );
};

export default ProjectPage;
