import React from 'react'
import { AiOutlineLink } from 'react-icons/ai';

export const recentWorksList = [
    {
      tempid: "1",
      heading: "Portfolio v 1.5",
      firstLink: "https://my-portfolio-1-939dc.web.app/",
      secondLink: "https://github.com/somtoChukwun/portfolio-1.5",
      thirdLink: "",
      stacks: "React SCSS SVG",
      tools: "Intersection Observer, Fortawesome, Material UI, Framer Motion, Leaflet, Router DOM, Sweet Alert".split(","),
      imgHover: "https://i.imgur.com/9s8zR7V_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      tempid: "2",
      heading: "AI Studio",
      firstLink: "https://ai-studio-b5162.web.app",
      secondLink: "https://github.com/somtoChukwun/ai-studio",
      thirdLink: "",
      stacks: "React.js SCSS SVG",
      tools: "Intersection Observer, Fortawesome, Material UI, Framer Motion, Router, DOM".split(","),
      imgHover: "https://i.imgur.com/U6B6rg6_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      tempid: "3",
      heading: "Uber and Facebook Part Clones",
      firstLink: "https://fb-cloned-858f5.web.app/",
      secondLink: "https://github.com/somtoChukwun/facebook-clone",
      thirdLink: "",
      stacks: "Next.js Tailwind CSS SVG React.js SCSS",
      tools: "Material UI, Mapbox, Expo".split(","),
      imgHover: "https://i.imgur.com/ITa3W4A_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      tempid: "4",
      heading: "Neumorphic App",
      firstLink: "https://todo-test-2-fa053.web.app/",
      secondLink: "https://github.com/somtoChukwun/neumorphic-todo-react-app",
      thirdLink: "",
      stacks: "React.js Styled Components CSS",
      tools: "Material UI, DOM".split(","),
      imgHover: "https://i.imgur.com/qRpK5x3.jpeg",
    },
    {
      tempid: "5",
      heading: "Intersection Observer Pens",
      firstLink: "https://codepen.io/somtoChukwun/pen/GRQwKjw",
      secondLink: "https://github.com/somtoChukwun/observer-pens",
      thirdLink: "https://codepen.io/somtoChukwun/pen/RwQjNzM",
      stacks: "React.js React DOM SCSS Codepen ",
      tools: "Intersection Observer, Google Fonts".split(","),
      imgHover: "https://i.imgur.com/A4S0JJq_d.webp?maxwidth=760&fidelity=grand",
    },
   
  ];


  export const MarqueeSplitTools = ({ letterClass, strArray, idx }) => {
    return(
      <p>
          {
              strArray.map((char, i) => (
                  <span 
                  key={char + i} 
                  className={`${letterClass} _${i + idx}`}>
                      {char}
                  </span>
              ))
          }
      </p>
  )
  }

  export const MarqueeImg = ({url, active, alt}) => {
    return(
      <img className={active && "is-active"} src={url} alt="works"/>
  )
  }
