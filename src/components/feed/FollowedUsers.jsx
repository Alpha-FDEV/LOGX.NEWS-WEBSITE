import Followed from "../followandblocked/Followed";
import MostLiked from "./MostLiked";

function FollowedUsers() {
    return (
      <div className="w-full flex flex-col  lg:grid-cols-2 lg:grid  gap-20 lg:h-[80vh]  overflow-y-scroll mt-10">
        <Followed />
        <div className="flex flex-col gap-4 overflow-y-scroll">
          <MostLiked text={"Most Liked"} />
          <MostLiked text={"Most Popular"} />
          <MostLiked text={"Most Discussed"} />
          <MostLiked text={"Highest Reputation"} />
        </div>
      </div>
    );
}

export default FollowedUsers;
