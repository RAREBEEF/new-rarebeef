import img1 from "../images/screenshots/meta-beef.png";
import img2 from "../images/screenshots/meta-beef-posts.png";
import img3 from "../images/screenshots/meta-beef-login.png";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import logo from "../images/logos/meta-beef-icon.png";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["MetaBeef"],
  header: {
    title: ["Meta", "Beef"],
    subTitle: ["with", "Firebase"],
  },
  imgs: [img1, img2, img3],
  summary: { name: "Meta Beef", date: "2022.01.26 ~ 02.24", headCount: 1 },
  description:
    "장소 리뷰 웹 애플리케이션입니다.\n지도로 위치를 검색하고 해당 위치에 대한 리뷰를 작성할 수 있습니다. Kakao map과 Firebase, 그리고 Redux 등 여러 기술들을 함께 다뤄보고자 시작하게 된 프로젝트입니다.",
  skills: ["HTML", "JavaScript", "React", "Sass", "Firebase"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/meta-beef" },
    {
      icon: velogIcon,
      href: "https://velog.io/@drrobot409/React-SNS-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0",
    },
    { icon: logo, href: "https://rarebeef.github.io/meta-beef" },
  ],
};

export default data;
