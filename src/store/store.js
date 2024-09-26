import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restArr: [
    {
      id: "11",
      ResturentName: "Crunch",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/63/3b/30/comfortable-intimate.jpg",
      rating: "3.4",
      feature: true,
      logo: "https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",
    },
    {
      id: 2,
      ResturentName: "Munch ",
      rating: "3.4",
      feature: true,
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFo3aujdUwouhcIXWqB0_eqIhEvdwylsqu3A&s",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY99sN0OpcWc84BuWGgzh_QqGQUBfMlAY64m-s2i1Huv6CSjsVppE9L6gFDaaAL-m1uZk&usqp=CAU",
    },
    {
      id: 3,
      ResturentName: "Karachi Student Biryani",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      image:
        "https://thefoodengineeruae.wordpress.com/wp-content/uploads/2020/02/9d947338-62d5-4973-a258-78bda48c03d7.jpg?w=1024",
      rating: "3.4",
      feature: true,
      logo: "https://pbs.twimg.com/profile_images/1731238111433355264/nsrAwJE2_400x400.jpg",
    },
    {
      id: 4,
      ResturentName: "Italian Pizza Kohat",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      rating: "3.4",
      feature: true,
      image:
        "https://i.pinimg.com/736x/ea/03/60/ea0360e75c93603bfa9c4cb09a34943f.jpg",
      logo: "https://static3.depositphotos.com/1000747/223/v/450/depositphotos_2231828-stock-illustration-pizza-chef.jpg",
    },
    {
      id: 5,
      ResturentName: "Speen Ghar",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      rating: "3.4",
      feature: true,
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/2b/a9/b8/c9/caption.jpg",
      logo: "https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png",
    },
    {
      id: 6,
      ResturentName: "Khyber Shinwari",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      rating: "3.4",
      feature: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxCI2ShPRSAjA2yLzmbfQFuCITVceF4UThA&shttps://5.imimg.com/data5/SELLER/Default/2021/12/QP/KN/HN/51665645/dhaba-style-hotel-restaurant-interior-design-500x500.jpghttps://5.imimg.com/data5/SELLER/Default/2021/12/QP/KN/HN/51665645/dhaba-style-hotel-restaurant-interior-design-500x500.jpghttps://5.imimg.com/data5/SELLER/Default/2021/12/QP/KN/HN/51665645/dhaba-style-hotel-restaurant-interior-design-500x500.jpg",
      logo: "https://us.123rf.com/450wm/carrotstudios/carrotstudios2106/carrotstudios210600062/169968029-meat-bbq-clip-art-vector-illustration-on-white-background.jpg?ver=6",
    },
    {
      id: 7,
      ResturentName: "P1P2",
      rating: "3.4",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      feature: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYS8Uq0H0_3E9yPpg8jT2Gp4De8j9vmoNbQ&s",
      logo: "https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png",
    },
    {
      id: 8,
      ResturentName: "Broadway",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      rating: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDE1mnAf97fxEceR4qNi268bSVY43zEcFRg&s",
      logo: "https://logowik.com/content/uploads/images/pizza1543.logowik.com.webp",
    },
    {
      id: 9,
      ResturentName: "Broadway",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      rating: "4",
      feature: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDE1mnAf97fxEceR4qNi268bSVY43zEcFRg&s",
      logo: "https://logowik.com/content/uploads/images/pizza1543.logowik.com.webp",
    },
    {
      id: 10,
      ResturentName: "Broadway",
      rating: "4",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDE1mnAf97fxEceR4qNi268bSVY43zEcFRg&s",
      logo: "https://logowik.com/content/uploads/images/pizza1543.logowik.com.webp",
    },
    {
      id: 11,
      ResturentName: "Broadway",
      rating: "4",
      description:
        "Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.Delicious crunch meals with a variety of flavors. Delicious crunch meals with a variety of flavors.",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDE1mnAf97fxEceR4qNi268bSVY43zEcFRg&s",
      logo: "https://logowik.com/content/uploads/images/pizza1543.logowik.com.webp",
    },
  ],
  ourTeam: [
    {
      name: "Hammad Ahmad",
      des: "Expert in coding and web technologies. Builds and maintains the company’s online presence, ensuring a seamless user experience.",
      title: "Web Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s",
    },
    {
      name: "Member 2",
      des: "Creative artist with a keen eye for design. Crafts visual content that communicates the brand’s message and engages the audience.",
      title: "Graphic Designer",
      img: "https://static.vecteezy.com/system/resources/previews/007/793/728/original/silhouette-drawing-of-muslim-woman-with-hijab-arab-woman-for-logo-template-icon-hijab-store-muslim-store-etc-free-vector.jpg",
    },
    {
      name: "Member 3",
      des: "Social media and marketing expert. Manages the company’s social media platforms, creating content to build a strong online community.",
      title: "Social Media Manager",
      img: "https://static.vecteezy.com/system/resources/previews/007/793/728/original/silhouette-drawing-of-muslim-woman-with-hijab-arab-woman-for-logo-template-icon-hijab-store-muslim-store-etc-free-vector.jpg",
    },
  ],
  foodItems: [
    {
      itemID: 1,
      shopID: "11",
      itemName: "Avocado Sandwich",
      itemPrice: 300,
      quantity: 1,
      des: "The top choice amoung our customers and a part of amazinng breakfast.",
      img: "https://static.vecteezy.com/system/resources/previews/026/723/980/large_2x/foodgraphy-of-pizza-isolated-on-white-background-generative-ai-photo.jpg",
    },
    {
      itemID: 2,
      shopID: "11",
      itemName: "italian pizza",
      itemPrice: 300,
      quantity: 1,
      des: "The top choice amoung our customers and a part of amazinng breakfast.",
      img: "https://static.vecteezy.com/system/resources/previews/026/723/980/large_2x/foodgraphy-of-pizza-isolated-on-white-background-generative-ai-photo.jpg",
    },
    {
      itemID: 3,
      shopID: "11",
      itemName: "Sandwich",
      itemPrice: 200,
      quantity: 1,
      des: "The top choice amoung our customers and a part of amazinng breakfast.",
      img: "https://static.vecteezy.com/system/resources/previews/026/723/980/large_2x/foodgraphy-of-pizza-isolated-on-white-background-generative-ai-photo.jpg",
    },
  ],
  searchData: {},
  cart: [],
  formData: {},
  tempArr: [],
  devliveryCharges: 0,
  resID: 0,
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
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.itemID !== action.payload);
    },
    updateCartItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.itemID === action.payload.itemID
      );
      if (index !== -1) {
        state.cart[index] = action.payload;
      }
    },

    updateFormData: (state, action) => {
      state.formData = action.payload;
    },

    addToTempArr: (state, action) => {
      state.tempArr.push(action.payload);
    },

    clearTempArr: (state) => {
      state.tempArr = [];
    },

    updateDeliveryCharges: (state, action) => {
      state.devliveryCharges = action.payload;
    },

    updateResID: (state, action) => {
      state.resID = action.payload;
    },
  },
});

export const {
  addtoData,
  updateSearchData,
  addToCart,
  removeFromCart,
  updateCartItem,
  updateFormData,
  addToTempArr,
  updateResID,
  clearTempArr,
  updateDeliveryCharges,
} = store.actions;

export default store.reducer;
