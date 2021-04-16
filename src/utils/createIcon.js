import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Icon} from 'react-native-gradient-icon';

import {COLORS} from '../constants/theme';

export const createIonicons = (name, size, color) => (
  <Ionicons name={name} size={size} color={color} />
);

export const createFeatherIcon = (name, size, color) => (
  <Feather name={name} size={size} color={color} />
);

const isGradient = focused => {
  if (focused) {
    return `colors={[
      {color: ${COLORS.purple}, offset: '0', opacity: '1'},
      {color: ${COLORS.coloumbia}, offset: '1', opacity: '1'},
    ]}`;
  } else {
    return `color="${COLORS.ghost}"`;
  }
};

export const createGradientIcon = (name, size, focused) => (
  <Icon size={size} {...isGradient(focused)} name={name} type="ionicon" />
);
