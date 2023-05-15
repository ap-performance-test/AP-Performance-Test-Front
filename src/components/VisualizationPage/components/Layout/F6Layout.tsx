import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

import { useSetRecoilState } from 'recoil';
import { popUpFloorState, popUpRoomState } from '../../../../module/Atom';

import Container from './Container';
import SquareUnit from './SquareUnit';
import SquareBackground from './SquareBackground';
import DetermineRoomColor from '../DetermineRoomColor';

import F6LayoutData from '../../../../data/VisualLayoutData/F6LayoutData.json';

import PopupMessage from '../PopupMessage';

const F6Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const popUpOpenClick = () => {
    setOpen(true);
  };
  const popUpCloseClick = () => {
    setOpen(false);
  };

  const setPopUpFloorState = useSetRecoilState(popUpFloorState);
  const setPopUpRoomState = useSetRecoilState(popUpRoomState);

  const onClick: React.MouseEventHandler<HTMLDivElement> = event => {
    const floor = event.currentTarget.getAttribute('data-floor');
    const room = event.currentTarget.getAttribute('data-room');
    if (floor && room) {
      setPopUpFloorState(floor);
      setPopUpRoomState(room);
      popUpOpenClick(); // 팝업 다이얼로그 열기
    }
  };

  const floorNumber = 6;

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3">Floor 6</Typography>
      </Box>
      <Container>
        <SquareBackground
          // Background Color
          width={F6LayoutData.Container.SquareBackground.width}
          height={F6LayoutData.Container.SquareBackground.height}
          gridColumn={F6LayoutData.Container.SquareBackground.gridColumn}
          gridRow={F6LayoutData.Container.SquareBackground.gridRow}
          backgroundColor={
            F6LayoutData.Container.SquareBackground.backgroundColor
          }
        />
        {F6LayoutData.Container.SquareUnit.map(unit => {
          const roomNumber = unit.id;

          return (
            <SquareUnit
              key={unit.id}
              width={unit.width}
              height={unit.height}
              backgroundColor={DetermineRoomColor(floorNumber, roomNumber)}
              gridColumn={unit.gridColumn}
              gridRow={unit.gridRow}
              onClick={onClick}
              data-floor={floorNumber}
              data-room={roomNumber}
            >
              <Typography
                style={{ color: 'white' }}
              >{`${roomNumber}호`}</Typography>
            </SquareUnit>
          );
        })}
      </Container>
      <PopupMessage
        open={open}
        popUpOpenClick={popUpOpenClick}
        popUpCloseClick={popUpCloseClick}
        setPopUpFloorState={setPopUpFloorState}
        setPopUpRoomState={setPopUpRoomState}
      />
    </div>
  );
};

export default F6Layout;