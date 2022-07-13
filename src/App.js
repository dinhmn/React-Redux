import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./sagas/news-thor/newsSlice";
import HackerNews from "./uis/HackerNew";
// redux saga architecture
const App = () => {
  // Generator function
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  // const hits = useSelector((state) => state.news.hits);
  // console.log(hits);
  return (
    <div>
      {/* <ButtonToggle></ButtonToggle>
      <Sidebar></Sidebar> */}
      <HackerNews></HackerNews>
    </div>
  );
};

export default App;
