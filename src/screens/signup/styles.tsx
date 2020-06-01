import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
`;

export const WelcomeText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 1.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_MEDIUM};
  padding: 0px 20px 0px 20px;
`;

export const SignupText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 9.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT - 100};
  margin-top: 8px;
  padding: 10px 20px 0px 20px;
`;

export const SignupOptionContainer = styled.View`
  padding: 0px 20px 0px 20px;
  margin-top: 60px;
`;

export const OptionContainer = styled.View`
  width: 100%;
  height: 54px;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 0.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT + 100};
  margin-left: 4px;
`;
