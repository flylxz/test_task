import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES} from '../constants/theme';
import {createFeatherIcon} from '../utils';

export const AddBank = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add bank</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.purple, COLORS.columbia]}
        style={styles.plus}>
        {createFeatherIcon('plus', 28, COLORS.white)}
      </LinearGradient>
      <View style={styles.circle}>
        <Text style={styles.number}>2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plus: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.base,
    elevation: 5,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    fontSize: 12,
    color: COLORS.black,
  },
  circle: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: COLORS.manatee,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: COLORS.manatee,
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    fontSize: 12,
  },
});
