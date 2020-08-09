import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterSVG from '../svg/FilterSVG';
import {useSelector, useDispatch} from 'react-redux';
import {selectCocoa, cocoafalse, cocoatrue} from '../../features/contentSlice';

export default function Cocoa() {
  // switch state for cocoa
  const cocoa = useSelector(selectCocoa);
  const dispatch = useDispatch();
  const onPressHandler = () => {
    cocoa ? dispatch(cocoafalse()) : dispatch(cocoatrue());
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Cocoa</Text>
          <Text>{cocoa === true ? <FilterSVG /> : null}</Text>
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
