import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTopController = ({ children, location: { pathname } }) => {
  useEffect(() => {
    try {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } catch (error) {
      window.scroll(0, 0);
    }
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTopController);
