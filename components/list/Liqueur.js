import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectLiqueur,
  liqueurtrue,
  liqueurfalse,
} from '../../features/contentSlice';

export default function Liqueur() {
  // switch state for liqueur
  const liqueur = useSelector(selectLiqueur);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    liqueur ? dispatch(liqueurfalse()) : dispatch(liqueurtrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Homemade Liqueur</Text>
          <Text>{liqueur === true ? <FilterSVG /> : null}</Text>
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
