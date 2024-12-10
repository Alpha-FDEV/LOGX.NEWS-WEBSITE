import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFeeds: [],
  openCardModel: false,
  selectFeedopen: false,
  openComments:false
};

const SelectedFeedSlice = createSlice({
  name: "selectedFeed",
  initialState,
  reducers: {
    addFeedCategory(state, action) {
      const newFeed = action.payload;
      console.log(newFeed);
      const feedExist = state.selectedFeeds.some((feed) => feed === newFeed);

      if (!feedExist) state.selectedFeeds.push(newFeed);
    },
    deleteCategory(state, action) {
      const deleteFeed = action.payload;

      state.selectedFeeds = state.selectedFeeds.filter(
        (feed) => feed != deleteFeed
      );
    },
    setCardModel(state,action) {
      state.openCardModel = action.payload;
    },
    setSelectedFeed(state,action) {
      state.selectFeedopen = action.payload;
    },
    setOpenComments(state, action) {
      state.openComments = action.payload
    }
  },
});

export const {
  addFeedCategory,
  deleteCategory,
  setCardModel,
  setSelectedFeed,
  setOpenComments,
} = SelectedFeedSlice.actions;

export default SelectedFeedSlice.reducer;
