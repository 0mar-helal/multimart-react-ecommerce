import { useEffect } from "react";

const useWindowScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useWindowScrollToTop;
