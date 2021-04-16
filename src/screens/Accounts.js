import React from 'react';
import {ScrollView, View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {StoreCarousel, Spendings, CardCarousel, Barclays} from '../components';
import {SIZES} from '../constants/theme';

export const Accounts = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>My accounts</Text>
          <StoreCarousel />
          <Spendings />
          <Barclays arrow="up" />
          <CardCarousel />
          <Barclays arrow="down" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container: {
    marginLeft: SIZES.base * 2,
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    // width: '90%',
    marginVertical: SIZES.base,
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 24,
  },
});
