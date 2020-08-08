import {createSlice} from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    ordinary: true,
    cocktails: true,
    milk: true,
    other: true,
    cocoa: true,
    shot: true,
    coffee: true,
    liqueur: true,
    punch: true,
    beer: true,
    soda: true,
  },
  reducers: {
    ordinarytrue: (state) => {
      state.ordinary = true;
    },
    ordinaryfalse: (state) => {
      state.ordinary = false;
    },
    cocktailstrue: (state) => {
      state.cocktails = true;
    },
    cocktailsfalse: (state) => {
      state.cocktails = false;
    },
    milktrue: (state) => {
      state.milk = true;
    },
    milkfalse: (state) => {
      state.milk = false;
    },
    othertrue: (state) => {
      state.other = true;
    },
    otherfalse: (state) => {
      state.other = false;
    },
    cocoatrue: (state) => {
      state.cocoa = true;
    },
    cocoafalse: (state) => {
      state.cocoa = false;
    },
    shottrue: (state) => {
      state.shot = true;
    },
    shotfalse: (state) => {
      state.shot = false;
    },
    coffeetrue: (state) => {
      state.coffee = true;
    },
    coffeefalse: (state) => {
      state.coffee = false;
    },
    liqueurtrue: (state) => {
      state.liqueur = true;
    },
    liqueurfalse: (state) => {
      state.liqueur = false;
    },
    punchtrue: (state) => {
      state.punch = true;
    },
    punchfalse: (state) => {
      state.punch = false;
    },
    beertrue: (state) => {
      state.beer = true;
    },
    beerfalse: (state) => {
      state.beer = false;
    },
    sodatrue: (state) => {
      state.soda = true;
    },
    sodafalse: (state) => {
      state.soda = false;
    },
  },
});

export const {
  ordinarytrue,
  ordinaryfalse,
  cocktailsfalse,
  cocktailstrue,
  milkfalse,
  milktrue,
  othertrue,
  otherfalse,
  cocoatrue,
  cocoafalse,
  shottrue,
  shotfalse,
  coffeetrue,
  coffeefalse,
  liqueurtrue,
  liqueurfalse,
  punchtrue,
  punchfalse,
  beertrue,
  beerfalse,
  sodatrue,
  sodafalse,
} = contentSlice.actions;

export const selectOrdinary = (state) => state.content.ordinary;
export const selectCocktails = (state) => state.content.cocktails;
export const selectMilk = (state) => state.content.milk;
export const selectOther = (state) => state.content.other;
export const selectCocoa = (state) => state.content.cocoa;
export const selectShot = (state) => state.content.shot;
export const selectCoffee = (state) => state.content.coffee;
export const selectLiqueur = (state) => state.content.liqueur;
export const selectPunch = (state) => state.content.punch;
export const selectBeer = (state) => state.content.beer;
export const selectSoda = (state) => state.content.soda;
export default contentSlice.reducer;
