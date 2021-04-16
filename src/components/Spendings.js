import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../constants/theme';
import {createIonicons} from '../utils';

export const Spendings = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.amount]}>
        <Text style={styles.amountText}>Spendings</Text>
        <Text style={styles.amountSum}>$ 137,000</Text>
      </View>
      <View style={[styles.row, styles.month]}>
        {createIonicons('chevron-back', 20, '#8C93A1')}
        <Text style={styles.monthText}>January</Text>
        {createIonicons('chevron-forward', 20, '#8C93A1')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    elevation: 5,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.base,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.padding,
  },
  amount: {
    backgroundColor: COLORS.white,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
  amountText: {
    color: COLORS.cornflower,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  amountSum: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  month: {
    backgroundColor: COLORS.whitesmoke,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: COLORS.white,
    borderBottomLeftRadius: SIZES.radius,
    borderBottomRightRadius: SIZES.radius,
  },
  monthText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  },
});
