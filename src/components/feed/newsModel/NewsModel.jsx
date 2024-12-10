import {
  ArrowBackIos,
  ArrowForwardIos,
  CommentBankOutlined,
  ReadMore,
} from "@mui/icons-material";
import { useState } from "react";
import LikesAndDislikes from "../../utilities/LikesAndDislikes";
import PostInteraction from "../PostInteraction";
import Comment from "./Comments";
import FollowUser from "../../followandblocked/FollowUser";
import Button from "../../utilities/Button";
import CommentForm from "./CommentForm";
import {
  setCardModel,
  setOpenComments,
} from "../../../slices/SelectedFeedSlice";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../utilities/Overlay";

function NewsModel() {
  const dispatch = useDispatch();
  const selectedComponent = useSelector(
    (state) => state.latestNews.selectedCard
  );
  const [sidebarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="w-full fixed top-20 md:left-20 md:translate-x-9 shadow-lg md:right-20 z-50 bg-white h-full overflow-y-scroll pb-10 md:w-5/6 ">
      <div className="flex justify-between items-center border-b-2 border-gray-400 py-2  ">
        <div className="flex gap-3 pt-5 px-4">
          <span className="text-2xl text-gray-800 font-bold w-10 h-7 cursor-pointer hover:bg-slate-300  rounded-md border-2 border-gray-800 flex justify-center items-center">
            {<ArrowBackIos />}
          </span>
          <span className="text-2xl text-gray-800 font-bold flex justify-center cursor-pointer items-center w-10 h-7 rounded-md border-2 border-gray-800 hover:bg-slate-300">
            {<ArrowForwardIos />}
          </span>
        </div>
        <div
          onClick={() => dispatch(setCardModel(false))}
          className="text-5xl text-orange-500 font-bold px-1 rounded-md flex items-center justify-center cursor-pointer hover:bg-orange-200"
        >
          &times;
        </div>
      </div>

      <div className="flex px-4 gap-2 relative">
        <div className="flex flex-col gap-4 pb-3  mt-7 ">
          <Title title={selectedComponent.title} />
          <Content
            content={selectedComponent.content}
            description={selectedComponent.description}
          />
          <Date
            date={selectedComponent.date}
            author={selectedComponent.author}
          />
          <NewsImage image={selectedComponent.urlToImage} />
          <div className="max-w-lg border-2 border-gray-400 py-4 px-4 rounded-md">
            <PostInteraction
              article={selectedComponent}
              likes={selectedComponent.likes}
            />
          </div>
          <CommentSection />
          <CommentForm />
          <Block author={selectedComponent.author} />
          <Comments />
        </div>
        <div onClick={() => setSideBarOpen(false)} className="fixed md:hidden">
          {sidebarOpen ? <Overlay /> : " "}
        </div>

        {sidebarOpen ? (
          <div className="relative block  md:hidden z-30">
            <div className="min-w-72 max-w-72 bg-gray-900 py-4 flex flex-col px-2 gap-5  fixed top-24 left-1/2  translate-x-12 translate-y-12">
              <div className="flex justify-between px-2 py-2 border-2 border-gray-400 rounded-md  ">
                <a
                  href={`${selectedComponent.url}`}
                  className="text-white hover:text-white"
                >
                  {" "}
                  <Button text={"Read post"} icon={<ReadMore />} />
                </a>
                <span className="text-3xl text-gray-100 hover:bg-orange-200 w-8 h-8 flex justify-center items-center rounded-md border-2 border-orange-300 font-medium p-1 pb-2 cursor-pointer ">
                  :
                </span>
              </div>
              <FollowUser user={selectedComponent} />
              <div className="h-[80vh]  overflow-y-scroll flex flex-col gap-3 pb-10">
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
                <Comment
                  font={"font-base"}
                  size={"text-sm"}
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setSideBarOpen(true)}
            className={"p-1 z-30 md:hidden bg-orange-500 text-white h-10 "}
          >
            {<ArrowBackIos />}
          </div>
        )}

        <div className="relative hidden md:block">
          <div className="min-w-72 max-w-72 bg-gray-900 py-4 flex flex-col px-2 gap-5  sticky top-0">
            <div className="flex justify-between px-2 py-2 border-2 border-gray-400 rounded-md  ">
              <a
                href={`${selectedComponent.url}`}
                className="text-white hover:text-white"
              >
                {" "}
                <Button text={"Read post"} icon={<ReadMore />} />
              </a>
              <span className="text-3xl text-gray-100 hover:bg-orange-200 w-8 h-8 flex justify-center items-center rounded-md border-2 border-orange-300 font-medium p-1 pb-2 cursor-pointer ">
                :
              </span>
            </div>
            <FollowUser user={selectedComponent} />
            <div className="h-[80vh]  overflow-y-scroll flex flex-col gap-3 pb-10">
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
              <Comment
                font={"font-base"}
                size={"text-sm"}
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ title }) {
  return (
    <header className="flex justify-between  pt-2 items-center ">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    </header>
  );
}
function Content({ content, description }) {
  const [showmore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col border-l-2 border-orange-600 px-1 mt-6 ">
      <p className="text-lg tracking-tight will-change-transform  duration-700">
        <span className="text-xl text-orange-500 font-semibold ">Read,,,</span>
        {description.split(" ").slice(0, 25).join(" ")}
        {showmore ? <p>{content.split(" ").slice(25, 50).join(" ")}</p> : ""}
        <span
          onClick={() => setShowMore((t) => !t)}
          className="text-base text-blue-400 font-medium cursor-default ml-1"
        >
          {showmore ? "show less" : "show more..."}
        </span>
      </p>
    </div>
  );
}

function Date({ date, author }) {
  return (
    <div className="flex justify-centre items-center gap-10 mt-4">
      <p className="text-orange-400">{date}</p>
      <p>
        Aouthor: <span className="text-base text-orange-300">{author}</span>
      </p>
    </div>
  );
}

function NewsImage({ image }) {
  return (
    <div className="rounded-md flex justify-start">
      <img
        src={`${image}`}
        alt=""
        className="lg:w-1/2 rounded-md  object-cover "
      />
    </div>
  );
}

function Block({ author }) {
  return (
    <div className="border-2 border-gray-400 py-2 rounded-md">
      <h3 className="border-b-2  flex-col sm:flex-row border-gray-400 text-xl font-semibold flex gap-2 px-2 py-3 ">
        <p> I don't Want to see posts from</p>
        <p>
          <span className="text-base text-orange-400">{author}</span>
        </p>
      </h3>
      <div className="flex justify-end items-center gap-10 py-3 px-2">
        <button className="text-lg px-2 py-1 bg-white border-2 hover:bg-slate-300 border-gray-400 rounded-md font-semibold">
          Report
        </button>

        <button className="text-lg px-4 py-1 bg-orange-500 font-semibold rounded-md hover:bg-orange-400 text-white">
          Block
        </button>
      </div>
    </div>
  );
}

function CommentSection() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.feedSelection.openComments);
  if (isOpen) return;
  return (
    <div className="flex items-center justify-center my-4">
      <button
        onClick={() => dispatch(setOpenComments(true))}
        className="bg-orange-500 text-lg text-white font-bold px-2 py-1 flex items-center justify-center gap-2 rounded-sm"
      >
        What do you have in mind?🤔💭
      </button>
    </div>
  );
}

function Comments() {
  return (
    <div className="mt-5 px-1  sm:px-2">
      <h2 className="text-xl text-gray-900 font-bold mb-2">Comments</h2>
      <div className="border-2 border-gray-400 px-5 py-4 flex flex-col gap-4 rounded-md">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default NewsModel;
