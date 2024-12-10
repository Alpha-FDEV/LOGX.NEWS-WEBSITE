
import SelectedFeedReducer from "./slices/SelectedFeedSlice";
import LatestReducer from "./slices/LatestSlice";
import HeadlinesReducer from "./slices/HeadlinesSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    feedSelection:SelectedFeedReducer,
    latestNews: LatestReducer,
    headlines: HeadlinesReducer,
    
  },
});


export default store;
