import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((item) =>
          item.id == action.payload.id ? { ...item, ...action.payload } : item
        ),
      ];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((i) => i.id !== action.payload)];
    },
  },
});

export const {
  createDataFunc,
  updateDataFunc,
  deleteDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
