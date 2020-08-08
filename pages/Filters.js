import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VectorSVGback from '../components/svg/VectorSVGback';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import OrdinaryDrink from '../components/list/OrdinaryDrink';

import Cocktail from '../components/list/Cocktail';
import Milk from '../components/list/Milk';
import Other from '../components/list/Other';
import Cocoa from '../components/list/Cocoa';
import Shot from '../components/list/Shot';
import Coffee from '../components/list/Coffee';
import Liqueur from '../components/list/Liqueur';
import Punch from '../components/list/Punch';
import Beer from '../components/list/Beer';
import Soda from '../components/list/Soda';
export default function Filters({navigation}) {
  return (
    <View>
      <View style={styles.containerStyle}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.svg}
            onPress={() => navigation.navigate('Drinks')}>
            <VectorSVGback />
          </TouchableOpacity>
          <Text style={styles.text}>Filters</Text>
        </View>
      </View>
      <ScrollView style={styles.listContainers}>
        <OrdinaryDrink />
        <Cocktail />
        <Milk />
        <Other />
        <Cocoa />
        <Shot />
        <Coffee />
        <Liqueur />
        <Punch />
        <Beer />
        <Soda />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',

    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 21,
  },
  containerStyle: {
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 3,
  },
  text: {
    fontWeight: '500',
    fontSize: 24,
    marginLeft: 40,
  },
  listContainers: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
