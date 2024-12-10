import { createSlice } from "@reduxjs/toolkit";
import UseFetchQuotes from "../components/customData/UseFetchQuotes";

const initialState = {
  articles: [],
  bookmarks: [],
  following: [],
  explores:[],
  selectedCard:{},

  type: "",
  status: "loading",
  errorMsg: "",
};

const latestSlice = createSlice({
  name: "latestNews",
  initialState,
  reducers: {
    loadingSuccess(state, action) {
      state.articles = action.payload;
      state.status = "ready";
    },
    loadedExplores(state, action) {
      state.explores=action.payload
      
    },
    dataFailure(state, action) {
      state.status = "error";
      state.errorMsg = action.payload;
    },
    dataLoading(state, action) {
      state.status = "loading";
    },
    setTypeNews(state, action) {
      state.type = action.payload;
    },
    setSelectedCard(state, action) {
      state.selectedCard=action.payload
    }
    ,
    addBookMark(state, action) {
      // if (state.bookmarks.length === 0) state.bookmarks.push(action.payload);

      const bookmarkExist = state.bookmarks.some(
        (bookmark) => bookmark?.title === action.payload?.title
      );
      if (!bookmarkExist) state.bookmarks.push(action.payload);
      if (bookmarkExist) {
        state.bookmarks = state.bookmarks.filter(
          (bookmark) => bookmark.title != action.payload.title
        );
      }


    },
   
    addFollowing: {
      prepare(user, quote) {
        return {
          payload: { user, quote },
        };
      },
      reducer(state, action) {
        // if (state.bookmarks.length === 0) state.bookmarks.push(action.payload);

        const payloadWithquote = { ...action.payload.user, quote:action.payload.quote };

    

        const followerExist = state.following.some(
          (follower) => follower?.author === payloadWithquote?.author
        );
        console.log(followerExist)
        console.log(followerExist)
        if (!followerExist) state.following.push(payloadWithquote);
        if (followerExist) {
          state.following = state.following.filter(
            (follower) => follower.author != payloadWithquote.author
          );
        }
      },
    },
  },
});

export const {
  loadingSuccess,
  dataFailure,
  dataLoading,
  setTypeNews,
  addBookMark,
  addFollowing,
  setSelectedCard,
  loadedExplores
} = latestSlice.actions;
export default latestSlice.reducer;
