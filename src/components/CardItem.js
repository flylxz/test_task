import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES} from '../constants/theme';
import {createFeatherIcon} from '../utils';

export const CardItem = ({item}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={item.background}
      style={styles.container}>
      <Text>{item.amount}</Text>
      <Text>{item.title}</Text>
      <View style={styles.delete}>
        {createFeatherIcon('trash-2', 24, COLORS.white)}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 278,
    width: 195,
    margin: SIZES.base,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 44,
    width: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
