import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectOrdinary,
  ordinaryfalse,
  ordinarytrue,
} from '../../features/contentSlice';

export default function OrdinaryDrink() {
  // switch state for ordinary drink
  const ordinaryDrink = useSelector(selectOrdinary);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    ordinaryDrink ? dispatch(ordinaryfalse()) : dispatch(ordinarytrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Ordinary Drink</Text>
          <Text>{ordinaryDrink === true ? <FilterSVG /> : null}</Text>
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
