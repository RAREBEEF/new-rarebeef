const calcPageScroll = (
  scrollHeight: number,
  clientHeight: number,
  page: number
): number => {
  if (scrollHeight !== 0) {
    return (
      // (위에 있는 페이지 총 높이 + 페이지 사이 간격) / 해당 페이지 위치
      ((clientHeight * (page - 1) + (clientHeight / 10) * (page - 2)) /
        ((scrollHeight - clientHeight))) *
      100
    );
  }
  return 0;
};

export default calcPageScroll;
