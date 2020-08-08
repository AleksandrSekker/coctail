import React from 'react';
import Cocktail from './Cocktail';
import {View, Text} from 'react-native';

export default function CocktailList({cocktails, loading}) {
  return (
    <View>
      <View>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </View>
    </View>
  );
}
