import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import CocktailsList from './CocktailList';

export default function DrinkContent({category}) {
  //Loading state
  const [loading, setLoading] = React.useState(false);

  //Cocktails state
  const [cocktails, setCocktails] = React.useState([]);

  //Using empty array[] as second array make to run useEffect ony ones when component mounts
  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      // fetching data from api and use try catch for catching error
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
        );
        const data = await response.json();
        const {drinks} = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {idDrink, strDrink, strDrinkThumb} = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, []);
  return (
    <View>
      <CocktailsList loading={loading} cocktails={cocktails} />
    </View>
  );
}
