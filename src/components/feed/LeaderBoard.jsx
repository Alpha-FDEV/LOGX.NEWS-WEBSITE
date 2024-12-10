import { Home, Person2 } from "@mui/icons-material";
import MostLiked from "./MostLiked";

function LeaderBoard() {
  return (
    <div className="h-[80vh]">
      <div className="flex justify-start gap-1 text-lg text-gray-800 fixed -mt-10 bg-white z-10 pt-1 ">
        <Home className="home-custom" />/ <Person2 className="home-custom" />{" "}
        <span className="text-lg text-gray-800 font-bold">Leaderboard</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-stretch w-[70vw] mt-12">
       <MostLiked text={"Most Liked"}/>
       <MostLiked text={"Most Popular"}/>
       <MostLiked text={"Most Discussed"}/>
       <MostLiked text={"Highest Reputation"}/>
      </div>
    </div>
  );
}


export default LeaderBoard;
