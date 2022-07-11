import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutHelmet = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About RAREBEEF</title>
        <meta
          name="description"
          content="RAREBEEF는 주니어 프론트엔드 개발자입니다. React 위주의 프로젝트를 진행하였으며 현재는 React VR, PWA에 관심을 갖고 빠르게 발전하는 웹 기술에 뒤처지지 않으려 항상 노력하고 있습니다."
        />
        <meta
          name="keyword"
          content="portfolio front-end front-end web development rarebeef 소고기는레어 프론트엔드 포트폴리오 웹개발 profile about"
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default AboutHelmet;
