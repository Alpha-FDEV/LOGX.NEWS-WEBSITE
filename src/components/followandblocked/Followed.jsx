import { useSelector } from "react-redux";
import FollowBtn from "../utilities/FollowBtn";
import React, { useState, useEffect } from "react";

function Followed() {
  const following = useSelector((state) => state.latestNews.following);

  return (
    <div className="flex flex-col gap-5 lg:ml-5 overflow-y-scroll  ">
      {following.length === 0 ? (
        <div className="flex flex-col mt-40 justify-center ">
          <h2 className="text-lg font-bold font-roboto">
            You have not followed any user 🫙🫙
          </h2>

          <h3 className="flex items-center">
            To follow a user click on the{" "}
            <span className=" mx-1 border-2 px-2 border-dotted border-orange-500">
              :
            </span>{" "}
            and select follow
          </h3>
        </div>
      ) : (
        <>
          {following.map((follower) => (
            <FollowedPresenter follower={follower} following={following} />
          ))}
        </>
      )}
    </div>
  );
}
function FollowedPresenter({ follower, following }) {
  const IsFollowing = following.some(
    (followed) => followed.author === follower.author
  );
  return (
    <div className="sm:flex justify-between items-center lg:pr-4 border-2 rounded-md border-orange-200 px-1 lg:px-2 py-1 ">
      <div className="flex gap-1 items-center">
        <div className="w-12 h-12 rounded-md flex justify-center items-center p-1 bg-orange-500">
          <h className="text-white text-lg font-bold">AM</h>
        </div>
        <div>
          <div className="flex gap-1">
            <h3 className="font-semibold text-lg text-gray-900">
              {follower.author}
            </h3>
            <p>
              ⚡⚡
              <span className="text-lg font-semibold text-gray-800">
                 {follower.likes > 1000 ? <>{(follower.likes / 1000).toFixed(2)}k</> : <>{follower.likes}</>}
              </span>
            </p>
          </div>
          <p>@{follower.author}</p>
          <p>{follower.quote}</p>
        </div>
      </div>
      <div>
        <FollowBtn
          text={`${IsFollowing ? "Following" : "Follow"}`}
          followerName={follower}
        />
      </div>
    </div>
  );
}
export default Followed;
