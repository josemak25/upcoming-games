import React from 'react';
import boxShadow from '../../utils/boxShadows';
import { useThemeContext } from '../../theme';
import { useSafeArea } from 'react-native-safe-area-context';

import { Container, HeaderLeft, HeaderRight, HeaderBackTitle } from './styles';
import { Platform } from 'react-native';

type HeaderProps = {
  title?: React.ElementType;
  titleContainerStyle?: object;
  style?: object;
  headerBackTitleVisible?: boolean;
  headerLeft?: React.ElementType;
  headerRight?: React.ElementType;
  headerLeftContainerStyle?: object;
  headerRightContainerStyle?: object;
};

export default function Header(props: HeaderProps) {
  const { colors } = useThemeContext();

  const { top: HEADER_TOP_PADDING } = useSafeArea();

  const {
    style,
    titleContainerStyle,
    headerBackTitleVisible,
    headerLeftContainerStyle,
    headerRightContainerStyle
  } = props;

  return (
    <Container
      style={[
        {
          paddingTop: Math.floor(HEADER_TOP_PADDING),
          height:
            Platform.OS === 'ios'
              ? Math.floor(HEADER_TOP_PADDING + 50)
              : Math.floor(HEADER_TOP_PADDING + 60)
        },
        boxShadow({
          elevation: 3,
          shadowColor: colors.BLACK_FONT_COLOR,
          shadowOpacity: 0.06
        }),
        style
      ]}
    >
      <HeaderLeft style={headerLeftContainerStyle}>
        {props.headerLeft ? <props.headerLeft /> : null}
        {headerBackTitleVisible && <HeaderBackTitle>back</HeaderBackTitle>}
      </HeaderLeft>

      {props.title ? <props.title style={titleContainerStyle} /> : null}

      <HeaderRight style={headerRightContainerStyle}>
        {props.headerRight ? <props.headerRight /> : null}
      </HeaderRight>
    </Container>
  );
}
