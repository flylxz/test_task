import React from 'react';
import {View, FlatList} from 'react-native';

import {StoreItem} from './StoreItem';

const data = [
  {
    id: 1,
    title: 're:Store',
    group: 'Electronics',
    discount: '15%',
    image: require('../../../assets/images/restore.png'),
  },
  {
    id: 2,
    title: 'Meat In Heaven',
    group: 'Food',
    discount: '25%',
    image: require('../../../assets/images/burger.png'),
  },
];

export const StoreCarousel = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <StoreItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};
