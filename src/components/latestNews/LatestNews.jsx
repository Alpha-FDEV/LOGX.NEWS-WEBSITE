import { useSelector } from "react-redux";
import CardComponent from "../feed/CardComponent";

function LatestNews() {
    const articles = useSelector((state) => state.latestNews.articles);
    return (
    
        <div className="">
          <div className="px-3 py-6 grid  grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 justify-center   ">
            {articles.map((article, i) => (
              <CardComponent key={i + 1} article={article} index={i} />
            ))}
          </div>
         
        </div>

    );
}

export default LatestNews
