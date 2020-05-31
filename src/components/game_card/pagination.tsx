import React from 'react';
import { GamePaginationContainer, GamePaginationText } from './styles';

interface PaginationProp {
  testID?: string;
  activeIndex: number;
  screenshotsLength: number;
}

const GameScreenShotPagination = (props: PaginationProp) => {
  const { activeIndex, screenshotsLength } = props;

  return (
    <GamePaginationContainer>
      <GamePaginationText>
        {1 + activeIndex}/{screenshotsLength}
      </GamePaginationText>
    </GamePaginationContainer>
  );
};

export default GameScreenShotPagination;
