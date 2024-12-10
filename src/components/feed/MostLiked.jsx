function MostLiked({ text }) {
  return (
    <div className="border-2 border-gray-500 px-4 w-full py-3 ">
      <h2 className="text-lg font-bold text-gray-800">{text}</h2>
      <div className=" h-[70vh] overflow-y-scroll  ">
        <LikedContent likes={"200k"} name={"Christopher Null"} />
        <LikedContent likes={"156k"} name={"William lewis"} />
        <LikedContent likes={"141k"} name={"LLIA NOVIKOV, EFREM LUKATSKY"} />
        <LikedContent likes={"130k"} name={"Amber Ferguson, Drea Cornejo"} />
        <LikedContent likes={"124k"} name={"Johan Stale"} />
        <LikedContent likes={"121k"} name={"Tylor mings"} />

        <LikedContent likes={"112k"} name={"Cris Walker"} />
        <LikedContent likes={"111k"} name={"Tony Simon"} />
        <LikedContent likes={"103k"} name={"Garret Stecy"} />
      </div>
    </div>
  );
}

function LikedContent({ likes, name }) {
  return (
    <div className="flex gap-2 items-center border-2 border-gray-300 p-2 mt-3 md:w-96 justify-start">
      <span className="text-gray-700 text-lg font-medium ">{likes}</span>
      <span className="text-lg">🏆</span>
      <div className="w-14 h-14 rounded-full ">
        <img
          src="https://dims.apnews.com/dims4/default/b6fafb1/2147483647/strip/true/crop/2112x1188+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F1d%2F492dda6a1f1da34132e124323a75%2F94f8cc50a7fd406582151ae3c9d2ed2b"
          alt="Image"
          className="object-cover w-14 h-14 rounded-2xl"
        />
      </div>
      <div className="flex gap-2 justify-end">
        <p className="flex flex-col gap-1">
          <span className="text-base text-gray-800 font-semibold">
            {name.split(" ").slice(0, 2).join(" ")}
          </span>
          <span className="text-sm font-semibold text-gray-700">
            @{name.split(" ").slice(0, 2).join(" ")}
          </span>
        </p>
        <div className="text-base text-gray-400 font-semibold ml-auto">
          {likes}
        </div>
      </div>
    </div>
  );
}

export default MostLiked;
