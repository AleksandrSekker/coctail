import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {
  cocktailsfalse,
  cocktailstrue,
  selectCocktails,
} from '../../features/contentSlice';

export default function Cocktail() {
  const cocktails = useSelector(selectCocktails);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    cocktails ? dispatch(cocktailsfalse()) : dispatch(cocktailstrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Cocktails</Text>
          <Text>{cocktails === true ? <FilterSVG /> : null}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  listText: {
    fontSize: 16,
  },
});
