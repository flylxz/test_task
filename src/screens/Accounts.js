import React from 'react';
import {ScrollView, View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {
  StoreCarousel,
  Spendings,
  CardCarousel,
  Barclays,
  TotalSpend,
  AddBank,
} from '../components';
import {SIZES} from '../constants/theme';

export const Accounts = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TotalSpend />
            <AddBank />
          </View>
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
    paddingTop: SIZES.padding * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: SIZES.padding,
    marginBottom: 50,
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
