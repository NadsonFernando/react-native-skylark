import React from 'react';
import {Text} from 'react-native';

import Styles from './styles';

interface ITitle {
  text: string;
  level?: number;
  stylize?: any;
}

const sizes = [16, 20, 18, 16, 14];

const Title: React.FC<ITitle> = ({text, level = 0, stylize = {}}) => {
  if (!stylize.fontSize) {
    stylize.fontSize = sizes[level];
  }

  return <Text style={[Styles.Title, stylize]}>{text}</Text>;
};

export default Title;
