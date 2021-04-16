import React from 'react';
import {View, FlatList} from 'react-native';

import {StoreItem} from './StoreItem';

const data = [
  {
    id: 1,
    title: 're:Store',
    group: 'Electronics',
    discount: '15%',
    image: '',
  },
  {
    id: 2,
    title: 'Meat In Heaven',
    group: 'Food',
    discount: '25%',
    image: '',
  },
  {
    id: 3,
    title: '2 Fingers',
    group: 'Drink',
    discount: '50%',
    image: '',
  },
  {
    id: 4,
    title: 'FireBlast',
    group: 'Fireworks',
    discount: '10%',
    image: '',
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
