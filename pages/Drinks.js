import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import VectorSVG from '../components/svg/VectorSVG';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import DrinkContent from '../components/content/OrdinaryDrinkContent';
import {useSelector} from 'react-redux';
import {
  selectOrdinary,
  selectCocktails,
  selectMilk,
  selectOther,
  selectCocoa,
  selectShot,
  selectCoffee,
  selectLiqueur,
  selectPunch,
  selectBeer,
  selectSoda,
} from '../features/contentSlice';

export default function Drinks({navigation}) {
  const ordinaryDrink = useSelector(selectOrdinary);
  const cocktails = useSelector(selectCocktails);
  const milk = useSelector(selectMilk);
  const other = useSelector(selectOther);
  const cocoa = useSelector(selectCocoa);
  const shot = useSelector(selectShot);
  const coffee = useSelector(selectCoffee);
  const liqueur = useSelector(selectLiqueur);
  const punch = useSelector(selectPunch);
  const beer = useSelector(selectBeer);
  const soda = useSelector(selectSoda);
  return (
    <ScrollView style={styles.containerStyle}>
      <View style={styles.header}>
        <Text style={styles.text}>Drinks</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
          <VectorSVG />
        </TouchableOpacity>
      </View>
      {ordinaryDrink === true ? (
        <>
          <Text style={styles.categoryText}>Ordinary Drink</Text>
          <DrinkContent category="Ordinary Drink" />
        </>
      ) : null}
      {cocktails === true ? (
        <>
          <Text style={styles.categoryText}>Cocktail</Text>
          <DrinkContent category="Cocktail" />
        </>
      ) : null}
      {milk === true ? (
        <>
          <Text style={styles.categoryText}>Milk / Float / Shake</Text>
          <DrinkContent category="Milk / Float / Shake" />
        </>
      ) : null}
      {other === true ? (
        <>
          <Text style={styles.categoryText}>Other / Unknown</Text>
          <DrinkContent category="Other/Unknown" />
        </>
      ) : null}
      {cocoa === true ? (
        <>
          <Text style={styles.categoryText}>Cocoa</Text>
          <DrinkContent category="Cocoa" />
        </>
      ) : null}
      {shot === true ? (
        <>
          <Text style={styles.categoryText}>Shot</Text>
          <DrinkContent category="Shot" />
        </>
      ) : null}
      {coffee === true ? (
        <>
          <Text style={styles.categoryText}>Coffee / Tea</Text>
          <DrinkContent category="Coffee / Tea" />
        </>
      ) : null}
      {liqueur === true ? (
        <>
          <Text style={styles.categoryText}>Homemade Liqueur</Text>
          <DrinkContent category="Homemade Liqueur" />
        </>
      ) : null}
      {punch === true ? (
        <>
          <Text style={styles.categoryText}>Punch / Party Drink</Text>
          <DrinkContent category="Punch / Party Drink" />
        </>
      ) : null}
      {beer === true ? (
        <>
          <Text style={styles.categoryText}>Beer</Text>
          <DrinkContent category="Beer" />
        </>
      ) : null}
      {soda === true ? (
        <>
          <Text style={styles.categoryText}>Soft Drink / Soda</Text>
          <DrinkContent category="Soft Drink / Soda" />
        </>
      ) : null}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 21,
  },
  containerStyle: {
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 3,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
  },
  categoryText: {
    marginLeft: 20,
    fontSize: 14,
    color: '#7E7E7E',
  },
});
