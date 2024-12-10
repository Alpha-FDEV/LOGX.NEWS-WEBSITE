import PaginationCard from "../../headlines/PaginationCard";
import UseFetchHeadlines from "../../newsData/UseFetchHeadlines";

function Trending() {
  const headlines = UseFetchHeadlines();
  return (
    <div className="flex flex-col gap-5 relative">
      <div className="fixed bg-white z-20 p-2">
        <h2 className="font-bold text-lg  ">Trending</h2>
      </div>
      <div className="px-3 py-6 grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-center   ">
        {headlines.map((item, i) => (
          <div className="scale-90">
            <PaginationCard data={item} height={"h-96"} adjust={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
