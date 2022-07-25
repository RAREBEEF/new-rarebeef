import githubIcon from "../images/icons/github-square-brands.svg";
import logo from "../images/logos/palette-vault-icon.png";
import img1 from "../images/screenshots/palette-vault.png";
import img2 from "../images/screenshots/palette-vault-new.png";
import img3 from "../images/screenshots/palette-vault-empty.png";
import img4 from "../images/screenshots/palette-vault-responsive.png";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["PaletteVault"],
  header: {
    title: ["Palette", "Vault"],
    subTitle: ["Save", "your", "palettes"],
  },
  imgs: [img1, img2, img3, img4],
  summary: {
    name: "Palette Vault",
    date: "2022.07.18 ~ 2022.07.25",
    headCount: 1,
  },
  description:
    "나만의 팔레트를 저장할 수 있는 색상 저장소입니다.\n팔레트는 Firebase에 업로드되며 데이터의 양이 많아질 것에 대비해 쿼리 커서를 이용하여 필요에 따라 조금씩 끊어서 불러올 수 있도록 하였습니다.",
  skills: ["HTML", "TypeScript", "React", "Redux", "Sass", "Firebase"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/palette-vault" },
    { icon: logo, href: "https://palettevault.netlify.app" },
  ],
};

export default data;
