import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {selectShot, shotfalse, shottrue} from '../../features/contentSlice';

export default function Shot() {
  const shot = useSelector(selectShot);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    shot ? dispatch(shotfalse()) : dispatch(shottrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Shot</Text>
          <Text>{shot === true ? <FilterSVG /> : null}</Text>
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
