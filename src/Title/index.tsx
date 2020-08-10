import React from 'react';
import {Text} from 'react-native';

import Styles from './styles';

interface TitleProps {
  text: string;
  stylize?: object;
}

const Title: React.FC<TitleProps> = ({text, stylize = {}}) => {
  return <Text style={[Styles.Title, stylize]}>{text}</Text>;
};

export default Title;
