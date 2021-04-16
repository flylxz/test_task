import React from 'react';
import {View} from 'react-native';

import {Navigator} from './src/routes';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
}
