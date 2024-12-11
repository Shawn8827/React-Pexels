import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "24px", lineHeight: "1.5" }}>
        此網站旨在練習 API 串接技能，利用 Pexels API 提供的照片與影片資源，
        <br />
        建置一個簡易的圖片搜尋展示平台
      </p>
    </div>
  );
};

export default About;
