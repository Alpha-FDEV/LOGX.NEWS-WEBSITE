import { useEffect } from "react";
import { dataFailure, loadingSuccess } from "../../slices/LatestSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UseFetchHeadlines from "./UseFetchHeadlines";
import {
  dataHeadlinesFailure,
  dataHeadlinesLoading,
  loadingHeadlinesSuccess,
} from "../../slices/HeadlinesSlice";

const API_KEY = "1b06db323a6641108397cfcd62d2c714";
let URL;

function determineNewsType(newsType, query, country = "us") {
  switch (newsType) {
    case "latest": {
      URL = "http://localhost:9000/news";
      // case "latest": {
      //   URL = `https://newsapi.org/v2/everything?q=${
      //     query ? query : "latest"
      //   }&apiKey=${API_KEY}`;

      return URL;
    }

    case "headlines": {
      URL = "http://localhost:9000/news";
      // case "headlines": {
      //   URL = ` https://newsapi.org/v2/top-headlines?country=${
      //     country ? country : "us"
      //   }&${API_KEY}`;

      return URL;
    }

    default: {
      console.log("no path found");
    }
  }
  // console.log(URL);
  return URL;
}

// const tempQuery = "bitcoin";

function UseFetchNews(query) {
  const type = useSelector((state) => state.latestNews.type);
  console.log(type)
  const URL = determineNewsType(type, query);
  const headlines = UseFetchHeadlines();
  console.log(headlines);

  const dispatch = useDispatch();

  if (headlines.length > 0) {
    dispatch(loadingSuccess(headlines));
    return;
  }

  useEffect(
    function () {
      function getArticles(articles) {
        const CompleteArticles = articles.filter((article) => {
          return (
            article.title &&
            article.author &&
            article.description &&
            article.content &&
            article.publishedAt &&
            article.urlToImage
          );
        });

        if (type === "latest") dispatch(loadingSuccess(CompleteArticles));
        if (type === "headlines") dispatch(loadingHeadlinesSuccess(CompleteArticles));
          
      }

      const controller = new AbortController();
      async function fetchNews() {
        try {
          if (type === "latest") dispatch(dataLoading());
          if (type === "headlines") dispatch(dataHeadlinesLoading());

          const res = await fetch(`${URL}`, {
            signal: controller.signal,
          });
          // const res = await fetch(
          //   ` https://newsapi.org/v2/everything?q=${
          //     query ? query : "latest"
          //   }&apiKey=${API_KEY}`,
          //   { signal: controller.signal }
          // );

          if (!res.ok) {
            throw new Error("Something went wrong 🧯check your connection");
            return;
          }

          const data = await res.json();
          if (data.articles.length === 0)
            throw new Error(" 🧯Could not find news");
          console.log(data);
          // getArticles(data.articles);
          getArticles(data);
        } catch (err) {
          if (type === "latest") dispatch(dataFailure(err));
          if (type === "headlines") dispatch(dataHeadlinesFailure(err));
        }
      }
      fetchNews();
      return function () {
        controller.abort();
      };
    },
    [query, dispatch]
  );
}

export default UseFetchNews;
