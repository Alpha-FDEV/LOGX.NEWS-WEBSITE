import UseFetchHeadlines from "../../newsData/UseFetchHeadlines";
import CardComponent from "../CardComponent";
// import FetchExplores from "./FetchExplores";

function Explore() {
  // const explores = FetchExplores();
  // console.log(explores);
  const headlines = UseFetchHeadlines();
  

  return (
    <div className="flex flex-col gap-5 relative">
      <div className="fixed bg-white z-20 p-2">
        <h2 className="font-bold text-lg  ">Explore</h2>
      </div>
      <div className="px-3 py-6 grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-center   ">
        {headlines.map((item, i) => (
          <div className="scale-90">
            <CardComponent article={item} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
