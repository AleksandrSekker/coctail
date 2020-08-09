import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {selectSoda, sodafalse, sodatrue} from '../../features/contentSlice';

export default function Cocktail() {
  // switch state for soda
  const soda = useSelector(selectSoda);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    soda ? dispatch(sodafalse()) : dispatch(sodatrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Soft Drink / Soda</Text>
          <Text>{soda === true ? <FilterSVG /> : null}</Text>
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
