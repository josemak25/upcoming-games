import React from 'react';
import GameOption from '../game_option';
import Button from '../button';
import { useThemeContext } from '../../theme';
import hexToRGB from '../../utils/hexToRGB';

import { SearchPlatformsContainer, SearchPlatformsButton } from './styles';

interface PlatformsProp {
  platforms: { option: string; optionColor: string; code: string[] }[];
  onPress(option: string[]): void;
  handleSearch(): void;
  handleCancel(T: any): void;
}

export default function Platforms({
  platforms,
  onPress,
  handleSearch,
  handleCancel
}: PlatformsProp) {
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
          onPress={handleSearch}
          title="search platform"
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
        />
      </SearchPlatformsButton>
    </SearchPlatformsContainer>
  );
}

Platforms.defaultProps = {
  platforms: [
    { option: 'Playstation', code: [48, 46, 9, 8], optionColor: '#016dc7' },
    { option: 'Nintendo Switch', code: [130], optionColor: '#ec5c52' },
    { option: 'Xbox', code: [169, 49, 12, 11], optionColor: '#107C10' },
    { option: 'Mobile', code: [34, 39], optionColor: '#d5c3b2' },
    { option: 'PC', code: [6, 14], optionColor: '#47464c' }
  ]
};
