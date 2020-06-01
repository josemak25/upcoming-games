import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DARK_BG_COLOR};
`;

export const DescriptionWrapper = styled.View`
  width: 100%;
  height: 190px;
  padding: 0 10px;
  margin-top: 35px;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  height: 190px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  border-radius: 4px;
  padding: 10px 10px;
`;

export const DescriptionInnerTop = styled.View`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopLeft = styled.View`
  width: 85%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const DescriptionText = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
`;

export const TextGroup = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const CategoryHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
`;

export const CategoryDetails = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT};
  margin-left: 5px;
`;

export const DescriptionIconGroup = styled.View`
  display: flex;
  height: 60px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

export const IconCard = styled.View`
  width: 100%;
  height: 100%;
  margin-left: 5px;
`;

export const SlideImageContainer = styled.View`
  width: 94%;
  height: 200px;
`;

export const SummaryContainer = styled.View`
  width: 95%;
  padding: 0px 20px;
`;

export const SummaryText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  line-height: 30px;
`;
