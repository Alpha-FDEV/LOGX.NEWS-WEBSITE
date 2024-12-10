import { ReadMore } from "@mui/icons-material";
import Button from "../utilities/Button";
import PostInteraction from "./PostInteraction";
import { useDispatch, useSelector } from "react-redux";
import { setCardModel } from "../../slices/SelectedFeedSlice";
import { useState } from "react";
import { addFollowing, setSelectedCard } from "../../slices/LatestSlice";
import UseFetchQuotes from "../customData/UseFetchQuotes";

function CardComponent({ article, index }) {
  const [openDropDown, setOpenDropDown] = useState(false);

  const dispatch = useDispatch();
  const quote = UseFetchQuotes();

  if (!article) return;

  const likes = (index + 1) * 19;
  const [totalLikes, setTotalLikes] = useState(likes);

  const date = new Date(article.publishedAt).toDateString();

  const {
    source,
    title,
    description,
    urlToImage,
    author,
    url,

    content,
  } = article;
  const isfollowed = useSelector((state) => state.latestNews.following).some(
    (follower) => follower.author === author
  );
  const updatedArticle = { ...article, date, likes: totalLikes };


  return (
    <div
      onMouseLeave={() => setOpenDropDown(false)}
      className="shadow-xl border-2 transition-transform duration-1000 border-orange-200 hover:border-orange-400 hover:scale-105 rounded-lg p-2 mb-6 h-[28rem] flex flex-col "
    >
      <div className=" flex flex-col gap-3 ">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-1 items-center">
            <span className="w-12 h-10 ">
              <img
                src={`https://i.pravatar.cc/150?img=${index}`}
                alt="Poster Profile"
                className="rounded-full"
              />
            </span>
          </div>
          <div className="flex items-center gap-5 relative">
            <a href={`${url}`} className="text-gray-900 hover:text-white">
              {" "}
              <Button text={"Read post"} icon={<ReadMore />} />
            </a>
            <span
              onMouseEnter={() => setOpenDropDown((t) => !t)}
              className=" hover:bg-orange-200 text-3xl text-gray-900 font-medium flex justify-center items-center px-2 ml-3 mr-3 cursor-pointer"
            >
              :
            </span>
            {openDropDown ? (
              <div
                onMouseLeave={() => setOpenDropDown(false)}
                className="shadow-xl h-40  absolute top-10 translate-x-24 bg-gray-200 rounded-md z-20 w-1/2  text-center flex flex-col justify-center "
              >
                <ul className="flex flex-col justify-center gap-2 ">
                  <li
                    onClick={() => dispatch(addFollowing(updatedArticle, quote))}
                    className="text-lg font-roboto text-gray-900 hover:bg-white cursor-pointer"
                  >
                    {isfollowed ? "Unfollow" : "follow"}
                  </li>
                  <li className="text-lg font-roboto text-gray-900 hover:bg-white cursor-pointer">
                    Share
                  </li>
                  <li className="text-lg font-roboto text-gray-900 hover:bg-white cursor-pointer">
                    Block
                  </li>
                </ul>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
        <div
          onClick={() => {
            dispatch(setSelectedCard(updatedArticle));
            dispatch(setCardModel(true));
          }}
          className="flex flex-col gap-2 cursor-pointer"
        >
          <h1 className="font-roboto text-start font-bold text-xl text-gray-900 p-2">
            {title.split(" ").slice(0, 8).join(" ")}...
          </h1>
          <div className="flex justify-between">
            <p className="text-start">{date}</p>
            <p className="text-base font-thin text-slate-600">{author}</p>
          </div>

          <div className="flex flex-col gap-1">
            <CardImage image={urlToImage} />
            <p className="text-start">
              {description.split(" ").slice(0, 15).join(" ")}...
            </p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <PostInteraction
          article={updatedArticle}
          likes={updatedArticle.likes}
          toLink={url}
          setTotalLikes={setTotalLikes}
        />
      </div>
    </div>
  );
}

function CardImage({ image }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="w-full h-full max-h-36 lg:max-w-96 object-cover"
      />
    </div>
  );
}

export default CardComponent;
