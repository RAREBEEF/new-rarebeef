import githubIcon from "../images/icons/github-square-brands.svg";
import logo from "../images/logos/dailiary-icon.png";
import img1 from "../images/screenshots/dailiary-calendar.png";
import img2 from "../images/screenshots/dailiary-responsive.png";
import img3 from "../images/screenshots/dailiary-diary.png";
import img4 from "../images/screenshots/dailiary-write.png";
import img5 from "../images/screenshots/dailiary-period.png";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["Dailiary"],
  header: {
    title: ["Dailiary"],
    subTitle: ["With", "Next.js"],
  },
  imgs: [img1, img2, img3, img4, img5],
  summary: {
    name: "Dailiary",
    date: "2022.08.23 ~ 2022.09.19",
    headCount: 1,
  },
  description:
    "하루를 기록하는 일기장 웹 애플리케이션입니다.\n설치 가능한 PWA로 개발하였으며 Next.js를 활용한 첫 프로젝트입니다.\n처음 생각과는 다르게 달력 알고리즘을 작성한 부분이 가장 재밌었던 프로젝트입니다.\n달력은 빈 칸을 포함한 최대 칸 수인 42칸(7일*6주 차)을 모두 배열에 저장한 뒤 7개씩 끊어서 <tr><td/></tr> 구조로 반환하여 각 월에 맞게 테이블 구조로 생성하였습니다. 또한 공휴일 api를 통해 공휴일도 구분할 수 있도록 하였습니다.",
  skills: ["HTML", "TypeScript", "Next", "Redux", "Sass", "Firebase"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/dailiary" },
    { icon: logo, href: "https://dailiary.netlify.app" },
  ],
};

export default data;
