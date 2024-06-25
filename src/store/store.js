import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restArr: [
    {
      ResturentName: "Resturent 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      rating: "3.4",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 2 ",
      rating: "3.4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      rating: "3.4",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 4",
      rating: "3.4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 5",
      rating: "3.4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 6",
      rating: "3.4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 7",
      rating: "3.4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
    {
      ResturentName: "Resturent 8",
      rating: "3.4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s",
      logo: "https://img.freepik.com/premium-vector/healthy-food-logo_476121-99.jpg",
    },
  ],

  searchData: {},
};

export const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    addtoData: (state, action) => {
      state.restArr.push(action.payload);
    },
    updateSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { addtoData, updateSearchData } = store.actions;

export default store.reducer;
