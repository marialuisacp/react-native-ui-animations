import React from 'react';
import { View } from 'react-native';
import { CustomInput } from './InputText.styles';

const InputText = ({ onChange, value, placeholder, type,
  borderColor, textColor, secureTextEntry = false }) => (
  <View>
    <CustomInput
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      textColor={textColor}
      keyboardType={type}
      borderColor={borderColor}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default InputText;
