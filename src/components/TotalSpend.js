import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../constants/theme';
import {createFeatherIcon} from '../utils';

export const TotalSpend = () => {
  return (
    <View style={styles.container}>
      {createFeatherIcon('clock', 20, COLORS.black)}
      <Text style={styles.money}>$1,340.10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    padding: SIZES.base,
    elevation: 2,
  },
  money: {
    marginLeft: 6,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.black,
  },
});
