import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES} from '../../constants/theme';
import {createFeatherIcon} from '../../utils';

export const StoreItem = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={item.image} />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.group}</Text>
        </View>
        <LinearGradient
          style={styles.discountContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[COLORS.purple, COLORS.columbia]}>
          <Text style={styles.discount}>{item.discount}</Text>
        </LinearGradient>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.btnHeart]}
        onPress={() => console.log('fav')}>
        {createFeatherIcon('heart', SIZES.base * 2, COLORS.white)}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.btnDel]}
        onPress={() => console.log('del')}>
        {createFeatherIcon('x', SIZES.base * 2, COLORS.white)}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 240,
    width: 300,
    margin: SIZES.base,
    padding: SIZES.base,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: SIZES.radius,
    resizeMode: 'contain',
    height: 160,
    width: 285,
  },
  titleContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    fontSize: 24,
    color: COLORS.black,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.manatee,
  },
  discountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 22,
    width: 44,
  },
  discount: {
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    fontSize: 14,
    color: COLORS.white,
  },
  btn: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 44,
    width: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHeart: {
    left: 20,
    top: 20,
  },
  btnDel: {
    right: 20,
    top: 20,
  },
});
