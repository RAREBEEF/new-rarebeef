import img1 from "../images/screenshots/place-review.png";
import img2 from "../images/screenshots/place-review-login.png";
import img3 from "../images/screenshots/place-review-write.png";
import img4 from "../images/screenshots/place-review-profile.png";
import img5 from "../images/screenshots/place-review-responsive.png";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["toDo"],
  header: {
    title: ["To", "Do", "app"],
    subTitle: ["with", "React", "Native"],
  },
  imgs: [img1, img2, img3, img4, img5],
  summary: { name: "To Do", date: "2022.05.31 ~ 06.03", headCount: 1 },
  description:
    "To Do 모바일 어플리케이션입니다.\nReact Native와 Expo를 통해 프로젝트를 진행하였으며 Drag & Drop, Progress bar 등의 기능을 구현하였습니다.",
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
