const calcPageScroll = (
  scrollHeight: number,
  clientHeight: number,
  page: number
): number => {
  if (scrollHeight !== 0) {
    return (
      ((clientHeight * (page - 1) + (clientHeight * 3) / 10) /
        ((scrollHeight - clientHeight) * (page - 2))) *
      100
    );
  }
  return 0;
};

export default calcPageScroll;
