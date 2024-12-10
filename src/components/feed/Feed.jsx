import CardComponent from "./CardComponent";
import FeedTopBar from "./FeedTopBar";

// import SelectFeed from "./SelectFeed";
import Loader from "../utilities/Loader";
import Error from "../utilities/Error";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { setTypeNews } from "../../slices/LatestSlice";

export default function Feed({ error, isOnline }) {
  const { type } = useParams();
  const dispatch = useDispatch();
  dispatch(setTypeNews(type));
  const dataState = useSelector((state) => state.latestNews);
  console.log(dataState.status);

  return (
    <div className="flex-2 bg-white px-2 relative w-full ">
      {dataState.status === "ready" &&  <div className="w-full">
      <Outlet />
    </div>}
      {dataState.status === "loading" && <Loader />}
      {dataState.status === "error" && <Error error={"connection problem"} />}
    </div>
  );
}

