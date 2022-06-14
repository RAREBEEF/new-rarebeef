import img1 from "../images/screenshots/browser-start.png";
import img2 from "../images/screenshots/browser-start-init.png";
import img3 from "../images/screenshots/browser-start-bookmark.png";
import img4 from "../images/screenshots/browser-start-theme.png";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import logo from "../images/logos/browser-start-icon.png";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["BrowserStart"],
  header: {
    title: ["Browser", "start", "page"],
    subTitle: ["with", "Redux"],
  },
  imgs: [img1, img2, img3, img4],
  summary: {
    name: "Browser start page",
    date: "2022.03.09 ~ 03.14",
    headCount: 1,
  },
  description:
    "나만의 브라우저 시작 페이지를 만들어 보았습니다.\nRedux를 처음 응용해 본 프로젝트이며 로컬 스토리지에 저장된 사용자 설정을 Redux를 통해 앱 전역으로 뿌려주어서 사용하던 테마와 북마크를 불러올 수 있도록 하였습니다.",
  skills: ["HTML", "TypeScript", "React", "Redux", "Sass"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/new-tab" },
    {
      icon: velogIcon,
      href: "https://velog.io/@drrobot409/React-TypeScript-Redux-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%8B%9C%EC%9E%91-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0",
    },
    { icon: logo, href: "https://rarebeef.github.io/new-tab/" },
  ],
};

export default data;
