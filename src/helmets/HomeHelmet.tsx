import { Helmet, HelmetProvider } from "react-helmet-async";

const HomeHelmet = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>RAREBEEF's Portfolio</title>
        <meta
          name="description"
          content="RAREBEEF의 프론트엔드 포트폴리오입니다. 리액트 프로젝트를 주로 진행하였고 최근에는 웹에서의 3D 구현에 흥미를 느끼고 있습니다. 아직 부족한 점이 많은 만큼 배우고 싶은 것도 많기에 더 열심히 노력 중입니다."
        />
        <meta
          name="keyword"
          content="portfolio front-end front-end web development rarebeef 소고기는레어 프론트엔드 포트폴리오 웹개발"
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default HomeHelmet;
