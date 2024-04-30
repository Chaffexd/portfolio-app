"use client"
import React, { useEffect } from "react";

const BadgeEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="cc868f25-a58c-4516-a806-eb80792ad891"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default BadgeEmbed;
