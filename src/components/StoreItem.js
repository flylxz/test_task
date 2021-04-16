import React from 'react';
import {View, Text} from 'react-native';

export const StoreItem = ({item}) => {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        margin: 10,
        backgroundColor: 'lightblue',
        borderRadius: 6,
      }}>
      <Text>{item.title}</Text>
    </View>
  );
};
