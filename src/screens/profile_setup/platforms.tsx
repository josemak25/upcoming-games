import React from 'react';
import GameOption from '../../components/game_option';
import Button from '../../components/button';
import { useThemeContext } from '../../theme';
import hexToRGB from '../../utils/hexToRGB';

import { SearchPlatformsContainer, SearchPlatformsButton } from './styles';

interface SearchPlatformsProp {
  platforms: { option: string; optionColor: string; code: string[] }[];
  onPress(option: string[]): void;
  handleComplete(): void;
  handleCancel(T: any): void;
}

export default function SearchPlatforms({
  platforms,
  onPress,
  handleComplete,
  handleCancel
}: SearchPlatformsProp) {
  const { colors } = useThemeContext();

  return (
    <SearchPlatformsContainer>
      {platforms.map((platform, index) => (
        <GameOption
          key={index}
          {...platform}
          onPress={onPress}
          handleCancel={handleCancel}
        />
      ))}

      <SearchPlatformsButton>
        <Button
          title="complete setup"
          buttonStyle={{
            width: '80%',
            borderRadius: 5,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: colors.WHITE_BG_COLOR,
            borderWidth: 1,
            borderColor: hexToRGB(colors.ACTION_BG_COLOR, 0.2)
          }}
          textStyle={{ color: colors.ACTION_BG_COLOR }}
          onPress={handleComplete}
        />
      </SearchPlatformsButton>
    </SearchPlatformsContainer>
  );
}

SearchPlatforms.defaultProps = {
  platforms: [
    { option: 'Playstation', optionColor: '#016dc7' },
    { option: 'Nintendo Switch', optionColor: '#ec5c52' },
    { option: 'Xbox', optionColor: '#107C10' },
    { option: 'Mobile', optionColor: '#d5c3b2' },
    { option: 'PC', optionColor: '#47464c' }
  ]
};
