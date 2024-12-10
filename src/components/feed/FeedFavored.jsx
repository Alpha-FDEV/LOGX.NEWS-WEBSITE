import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import UseCustomFeedSelection from "../customData/UseCustomFeedSelection";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedCategory,
  deleteCategory,
} from "../../slices/SelectedFeedSlice";

function feedFavored() {
  const res = false;
  const [categoryId, setCategoryId] = useState();
  const selection = UseCustomFeedSelection();
  function handleOpenCategory(id) {
    setCategoryId((prevId) => (prevId === id ? null : id));
  }
  return (
    <div className="h-96 overflow-y-scroll">
      <NewsCategory
        selection={selection}
        categoryId={categoryId}
        onSetId={handleOpenCategory}
      />
    </div>
  );
}
function NewsCategory({ selection, categoryId, onSetId }) {
  return (
    <div className=" overflow-y-scroll">
      {selection.map((category, i) => (
        <Category
          key={i}
          id={i}
          category={category}
          isOpen={i === categoryId}
          onSetId={() => onSetId(i)}
        />
      ))}
    </div>
  );
}
function Category({ category, isOpen, onSetId }) {
  return (
    <div
      className={`flex flex-col items-start border-2   border-gray-300 rounded-md mb-3 pb-3   transition-all duration-500 scale-95
           ${isOpen ? " scale-100 ml-5  border-gray-600" : ""}  `}
    >
      <div className="flex w-full gap-4 items-center py-3" onClick={onSetId}>
        <ExpandMoreOutlinedIcon
          className={`showmore-custom transition-all duration-1000 ease-in-out ${
            isOpen ? " " : "-rotate-90"
          } `}
        />
        <h1
          className={`text-lg text-gray-900 px-1 border-b-2  ${
            isOpen ? " border-orange-500" : "border-transparent"
          }`}
        >
          {category.category}
        </h1>
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 "
        }`}
      >
        <div className="flex flex-row cursor-pointer h-full flex-wrap opacity-100 gap-2 px-5">
          {category.topics.map((topic) => (
            <CategorySubtitles topic={topic} key={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
function CategorySubtitles({ topic }) {
  const [feedExist, setFeedExist] = useState();
  const topicsFeed = useSelector((state) => state.feedSelection.selectedFeeds);
  console.log(topicsFeed);
  const dispatch = useDispatch();

  function addFeed(sub) {
    const feedExist = topicsFeed.some((feed) => feed === sub);
    console.log(feedExist);

    if (feedExist) {
      dispatch(deleteCategory(sub));
      setFeedExist(false);
    }
    if (!feedExist)  {
    setFeedExist(true);
    dispatch(addFeedCategory(sub))
    } ;
  }
  // useEffect(function () {

  // },[topicsFeed])

  return (
    <>
      <div
        onClick={() => addFeed(topic)}
        className={`"bg-gray-800 rounded-md flex flex-col justify-center items-center will-change-transform duration-200 border-2  cursor-pointer  h-12 px-1 py-2" ${
          feedExist ? "bg-gray-400 border-2 border-gray-800" : "bg-gray-800"
        }`}
      >
        <p className="text-base text-white font-roboto font-normal px-1 w-full max-w-96">
          #{topic}
        </p>
      </div>
    </>
  );
}

export default feedFavored;
