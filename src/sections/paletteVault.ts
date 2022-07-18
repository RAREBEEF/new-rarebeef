import ComingSoon from "../components/ComingSoon";
import githubIcon from "../images/icons/github-square-brands.svg";

import { sectionDataType } from "../types";

// const comingSoon = <div>개발 진행 중</div>;

const data: sectionDataType = {
  name: ["PaletteVault"],
  header: {
    title: ["Palette", "Vault"],
    subTitle: ["Save", "your", "palettes"],
  },
  app: ComingSoon,
  summary: { name: "Palette Vault", date: "2022.07.18 ~", headCount: 1 },
  description:
    "나만의 색상 팔레트를 저장할 수 있는 색상 저장소입니다. 현재 개발 진행 중입니다.",
  skills: ["HTML", "TypeScript", "React", "Redux", "Sass", "Firebase"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/palette-vault" },
  ],
};

export default data;
