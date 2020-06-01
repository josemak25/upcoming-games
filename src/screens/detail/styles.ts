import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
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
export const TopRight = styled.View`
  width: 15%;
  height: auto;
  background-color: tomato;
`;

export const ImageCard = styled.View`
  width: 30%;
  height: 140px;
  background-color: gold;
  margin-top: -30px;
  border-radius: 3px;
  margin-right: 15px;
`;

export const DescriptionText = styled.View`
  width: 70%;
  height: 110px;
`;

export const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT};
`;

export const TextGroup = styled.View`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

export const CategoryHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT};
`;

export const CategoryDetails = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 1.5}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT};
  margin-left: 5px;
`;

export const DescriptionIconGroup = styled.View`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  width: 100%;
  padding: 0px 20px;
`;

export const SummaryText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_LIGHT};
`;