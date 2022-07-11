import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactHelmet = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact RAREBEEF</title>
        <meta
          name="description"
          content="메일과 방명록으로 다양한 의견과 피드백을 남겨주세요. RAREBEEF의 Github과 블로그도 링크를 통해 확인해 보세요."
        />
        <meta
          name="keyword"
          content="portfolio front-end front-end web development rarebeef 소고기는레어 프론트엔드 포트폴리오 웹개발 contact mail email github blog velog guest book"
        />
        <meta property="og:title" content="Contact RAREBEEF" />
        <meta
          property="og:description"
          content="메일, 방명록 등을 통해 다양한 의견과 피드백을 남겨주세요."
        />
        <meta property="og:url" content="https://rarebeef.co.kr/contact" />
        <meta property="twitter:url" content="https://rarebeef.co.kr/contact" />
        <meta property="twitter:title" content="Contact RAREBEEF" />
        <meta
          property="twitter:description"
          content="메일, 방명록 등을 통해 다양한 의견과 피드백을 남겨주세요."
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default ContactHelmet;
