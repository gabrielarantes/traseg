import React from 'react';

import CheckBox from '@react-native-community/checkbox';

import colors from '../../constants/colors';

import {BoxTouchable} from '../../atoms/Spaces';
import {TextRegular} from '../../atoms/Titles';

function CardEquipaments({title, navigation}) {
  console.log(title);

  const margin = 16;

  return (
    <BoxTouchable
      ml={5}
      mb={margin}
      bg={colors.black}
      border={10}
      position={'relative'}>
      <CheckBox
        disabled={false}
        value={1}
        //onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />

      <TextRegular
        size={16}
        ml={margin}
        mt={margin}
        mb={5}
        align={'flex-start'}
        color={colors.gold}>
        {title}
      </TextRegular>
    </BoxTouchable>
  );
}

export default CardEquipaments;
