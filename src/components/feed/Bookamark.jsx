import { useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import {
  BookmarkAddedOutlined,
  BookmarkAddSharp,
  BookmarkOutlined,
  SearchSharp,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

function Bookamark() {
  const [query, setQuery] = useState("");
  const [searchedBookmark, setSearchedBookmark] = useState([]);
  const bookmarks = useSelector((state) => state.latestNews.bookmarks);

  //   return bookmarks.filter((bookmarks) => {
  //     const search = (
  //       bookmarks.title.split(" ") + bookmarks.description.split(" ")
  //     ).toLowerCase().includes(query.toLowerCase());

  //     return search;
  //   });
  // };
  // const searched=searchedBookamrks();
  // console.log(searched);
  useEffect(
    function () {
      setSearchedBookmark(bookmarks);
    },
    [bookmarks]
  );
  function handleSubmit(e) {
    e.preventDefault();
    if (query.length > 2) {
      handleSearchBookmarks(query, bookmarks);
    } else {
      setSearchedBookmark(bookmarks);
    }
  }

  function handleSearchBookmarks(q, items) {
    const results = items.filter((bookmark) =>
      bookmark.title.toLowerCase().includes(q.toLowerCase())
    );
    setSearchedBookmark(results);
  }

  return (
    <>
      {searchedBookmark.length === 0 ? (
        <div className="h-[90vh] relative flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold fixed left-1/3 -translate-y-24   ">
            You currently have no bookmarks (Click on the <BookmarkAddSharp />{" "}
            icon to add your favoured posts)
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <div className="flex justify-evenly items-center fixed top-30 bg-white z-10 ">
            <h2 className="text-lg text-start  font-bold text-gray-800 -translate-x-40">
              Bookmarks
            </h2>
            <div className="flex w-full max-w-96 items-center   border-2 border-orange-400 mt-2 z-10 bg-white">
              <form onSubmit={(e) => handleSubmit(e)}>
                <span onClick={(e)=> handleSubmit(e)}>
                  <SearchSharp className="search-custom" />
                </span>

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search bookmark"
                  className=" w-3/4 border-none outline-none p-2  rounded-md "
                />
              </form>
            </div>
          </div>

          <div className="px-3 py-0 mt-10 grid  grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 justify-center   ">
            {searchedBookmark.map((article, i) => (
              <div className="scale-90">
                <CardComponent key={i + 1} article={article} index={i} />
              </div>
            ))}
          </div>
          {/* <SelectFeed /> */}
        </div>
      )}
    </>
  );
}

export default Bookamark;
