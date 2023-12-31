
// import Me from "../img/me.png";

import { skills } from "../skillData";
// import {Link} from 'react-router-dom'

const Intro = () => {

  const displaySkills = () => {
    return skills.map((skill, index) => (
      <div className="col-md-2 col-6 mb-4">
        <div className="card shadow">
          <div className="card-body">
            <img
              className="img d-block m-auto"
              src={skill.img}
              alt=""
            />
            <h5 className="text-center">{skill.name}</h5>
          </div>
        </div>
      </div>
    ));
  };


  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">John Burton</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services and
              online stores.
            </p>
            <a href="/contact" type="submit" class="btn btn-success w-50 ">Contact Me</a>
          </div>
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className="i-scroll"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src="/img/me.png" alt="" className="i-img" />
        </div>

      </div>
      <section className="py-5">
        <h1 className="text-center">My Skills</h1>
        <div className="container">
          <div className="row mt-5">
            {
              displaySkills()
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;