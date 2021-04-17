import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES} from '../../constants/theme';
import {createFeatherIcon} from '../../utils';

export const CardItem = ({item}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={item.background}
      style={styles.container}>
      <Text style={styles.amount}>
        ${item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>{item.image}</View>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <Text style={styles.number}>{item.number}</Text>
      </View>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => console.log('delete')}>
        {createFeatherIcon('trash-2', 24, COLORS.white)}
      </TouchableOpacity>
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
    elevation: 5,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    right: SIZES.base * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 4,
  },
  dot: {
    height: 4,
    width: 4,
    margin: 1,
    backgroundColor: '#ffffff88',
    borderRadius: 50,
  },
  number: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 12,
    color: '#ffffff77',
  },
  delete: {
    position: 'absolute',
    left: SIZES.base * 2,
    bottom: SIZES.base * 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 44,
    width: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    color: '#ffffff',
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 12,
    color: '#ffffff77',
    marginTop: SIZES.base / 2,
  },
});
