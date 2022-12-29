import { useContext } from "react";
import NewsContext from "../context/NewsProvider";

const UseNews = () => {
  return useContext(NewsContext)
}

export default UseNews