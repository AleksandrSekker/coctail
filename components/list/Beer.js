import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {selectBeer, beerfalse, beertrue} from '../../features/contentSlice';

export default function Beer() {
  const beer = useSelector(selectBeer);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    beer ? dispatch(beerfalse()) : dispatch(beertrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Beer</Text>
          <Text>{beer === true ? <FilterSVG /> : null}</Text>
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
