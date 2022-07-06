import { useEffect, useState } from "react";

const useTitle = () => {
  const [title, setTitle] = useState<string>("RAREBEEF's Portfolio");

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");

    if (!htmlTitle) {
      return;
    }

    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;
