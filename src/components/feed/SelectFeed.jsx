import SelectSideBar from "./selectSIdeBar";
import Followed from "../followandblocked/Followed";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Overlay from "../utilities/Overlay";
import { element } from "prop-types";
import { useDispatch } from "react-redux";
import { setSelectedFeed } from "../../slices/SelectedFeedSlice";

function SelectFeed() {
  const Navigate = useNavigate();
  const dispatch=useDispatch()
  return (
    <div className=" w-[90vw] md:w-[80vw] left-0 translate-x-10  fixed md:translate-x-0  flex top-28 md:left-32 md:right-32 z-40  h-full max-h-96 bg-white shadow-2xl shadow-gray-950  backdrop-brightness-105 rounded-md  pl-0">
      <SelectSideBar />
      <div className="flex flex-col w-full p-6 ">
        <h1 className="text-xl w-full font-bold ml-6 mb-4 sticky top-0 border-b-2 border-gray-200 pb-2 flex justify-between items-center">
          <span>My feed</span>
          <span
            onClick={() => {
              Navigate("/Am.News/latest");
              dispatch(setSelectedFeed(false));
            }}
            className="text-4xl text-orange-500 px-3 flex justify-center items-center   rounded-sm hover:bg-gray-200 mr-6 cursor-pointer "
          >
            &times;
          </span>
        </h1>
        <Outlet />
      </div>
    </div>
  );
}

export default SelectFeed;
