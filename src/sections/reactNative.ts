import img1 from "../images/screenshots/toDo-1.png";
import img2 from "../images/screenshots/weather-1.png";
import img3 from "../images/screenshots/toDo-2.png";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["ReactNative"],
  header: {
    title: ["ToDo", "&", "Weather", "App"],
    subTitle: ["with", "React", "Native"],
  },
  imgs: [img1, img2, img3],
  summary: { name: "ToDo & Wheater", date: "2022.05.30 ~ 06.03", headCount: 1 },
  description:
    "ToDo 및 날씨 모바일 어플리케이션입니다.\n각각 별개의 앱으로 개발하였으며 React Native와 Expo를 통해 프로젝트를 진행하였습니다. Drag & Drop, Progress bar, geoLocation, weather api 등의 기능을 구현하였습니다.",
  skills: ["JavaScript", "React"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/Todo-app" },
    {
      icon: velogIcon,
      href: "https://velog.io/@drrobot409/React-Native-Expo-ToDo%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0",
    },
  ],
};

export default data;
