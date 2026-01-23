import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    page: 1,
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.page = 1;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
      state.page = 1;
    },
    nextPage(state, action) {
      state.page += 1;
    },
    prevPage(state, action) {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setLoading,
  setResults,
  setError,
  prevPage,
  nextPage,
  clearResults,
} = searchSlice.actions;

const searchReducer = searchSlice.reducer;
export default searchReducer;
