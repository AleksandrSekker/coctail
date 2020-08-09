import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Cocktail({image, name}) {
  // show image and name coctail
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={{width: 100, height: 100, margin: 20}}
          alt={name}
        />
      </View>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#7E7E7E',
  },
});
