import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState("");
  let [input, setInput] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  //搜尋
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: apiKey },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  //更多圖片
  const morePicture = async () => {
    console.log("page現在為 : ", page);
    let newURL;
    setPage(page + 1);
    console.log("setPage後,page現在為 : ", page);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${
        page + 1
      }&per_page=15`;
    }
    console.log("In the morePicture");
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: apiKey },
    });
    setData(data.concat(result.data.photos));
  };

  //一進網頁就先get精選照片
  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;