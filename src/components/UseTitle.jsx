import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Quick Serve | ${title}`;
  }, []);
};

export default UseTitle;
