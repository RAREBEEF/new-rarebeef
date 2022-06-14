import img1 from "../images/screenshots/simple-memo.png";
import img2 from "../images/screenshots/simple-memo-memo.png";
import img3 from "../images/screenshots/simple-memo-write.png";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import logo from "../images/logos/simple-memo-icon.png";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["SimpleMemo"],
  header: {
    title: ["Simple", "memo"],
    subTitle: ["with", "Local", "storage"],
  },
  imgs: [img1, img2, img3],
  summary: {
    name: "Simple memo",
    date: "2021.11.23 ~ 12.08",
    headCount: 1,
  },
  description:
    "간단한 메모장 웹 애플리케이션입니다.\nReact와 로컬 스토리지를 활용한 첫번째 프로젝트입니다. 노란 바탕의 메모장을 컨셉으로 잡고 스타일을 꾸며보았습니다.",
  skills: ["HTML", "JavaScript", "React", "Sass", "Netlify"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/Simple-Memo" },
    {
      icon: velogIcon,
      href: "https://velog.io/@drrobot409/%EB%A9%94%EB%AA%A8%EC%9E%A5-%EC%9B%B9-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98",
    },
    { icon: logo, href: "https://simplememo.netlify.app/" },
  ],
};

export default data;
