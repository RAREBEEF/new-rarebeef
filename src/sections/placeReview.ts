import img1 from "../images/screenshots/place-review.png";
import img2 from "../images/screenshots/place-review-write.png";
import img3 from "../images/screenshots/place-review-login.png";
import img4 from "../images/screenshots/place-review-responsive.png";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import logo from "../images/logos/place-review-icon.png";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["PlaceReview"],
  header: {
    title: ["Place", "Review"],
    subTitle: ["with", "Kakao Map"],
  },
  imgs: [img1, img2, img3, img4],
  summary: { name: "Place Review", date: "2022.03.15 ~ 04.08", headCount: 1 },
  description:
    "장소 리뷰 웹 애플리케이션입니다.\n지도로 위치를 검색하고 해당 위치에 대한 리뷰를 작성할 수 있습니다. Kakao map과 Firebase, 그리고 Redux 등 여러 기술들을 함께 다뤄보고자 시작하게 된 프로젝트입니다.",
  skills: ["HTML", "TypeScript", "React", "Redux", "Sass", "Firebase"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/place-review" },
    {
      icon: velogIcon,
      href: "https://velog.io/@drrobot409/%EC%9E%A5%EC%86%8C-%EB%A6%AC%EB%B7%B0-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0",
    },
    { icon: logo, href: "https://rarebeef.github.io/place-review/" },
  ],
};

export default data;
