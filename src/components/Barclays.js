import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SIZES} from '../constants/theme';

import {createIonicons} from '../utils';

export const Barclays = ({arrow}) => {
  return (
    <View style={styles.container}>
      <Text>Barclays bank</Text>
      <View>{createIonicons(`chevron-${arrow}`, 20, '#8C93A1')}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.base,
  },
});
