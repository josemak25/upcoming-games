import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Option,
  OptionColor,
  CancelOptionContainer
} from './styles';

type GameOptionProps = {
  style?: {};
  testID?: string;
  option: string;
  optionColor: string;
  onPress(option: string): void;
};

export default function GameOption(props: GameOptionProps) {
  const { option, optionColor, onPress, ...restProps } = props;

  const [state, setState] = useState({
    selected: false,
    optionColor,
    containerColor: '#ffffff'
  });

  const handleOnPress = () => {
    setState({ ...state, selected: true });
    onPress(option);
  };

  return (
    <Container
      {...restProps}
      activeOpacity={1}
      onPress={handleOnPress}
      style={{
        backgroundColor: state.selected
          ? state.optionColor
          : state.containerColor
      }}
    >
      {!state.selected ? (
        <OptionColor style={{ backgroundColor: optionColor }} />
      ) : null}

      <Option style={{ color: state.selected ? state.containerColor : null }}>
        {option}
      </Option>

      {state.selected ? (
        <CancelOptionContainer
          onPress={() => setState({ ...state, selected: false })}
        >
          <MaterialIcons name="cancel" size={20} color={state.containerColor} />
        </CancelOptionContainer>
      ) : null}
    </Container>
  );
}
