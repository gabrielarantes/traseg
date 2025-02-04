import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function Icons({navigation, name, size, color, style}) {
  return (
    <>
      <Icon style={style} name={name} size={size} color={color} />
    </>
  );
}

export default Icons;
