import React from 'react';
import {View, FlatList} from 'react-native';
import {mastercardImg, visaImg} from '../../utils';

import {CardItem} from './CardItem';

const data = [
  {
    id: 1,
    title: 'Tinkoff Black',
    amount: 84000.54,
    number: '4355',
    background: ['#1E1E1E', '#575757'],
    image: visaImg,
  },
  {
    id: 2,
    title: 'Tinkoff Black',
    amount: 125000,
    number: '4355',
    background: ['#6A89FD', '#50A2FF'],
    image: mastercardImg,
  },
];

export const CardCarousel = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <CardItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};
