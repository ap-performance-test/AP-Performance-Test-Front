import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import SocketClient from './SocketClient';
import {
  StartToggleState,
  floorState,
  roomState,
  locationClassState,
} from '../../../module/Atom';

const serverUrl = 'ws://localhost:3000';
const { handleClick } = SocketClient(serverUrl);

const StartButton = () => {
  const setStartToggle = useSetRecoilState(StartToggleState);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  // START 버튼 기능 전제조건
  const floor = useRecoilValue(floorState);
  const room = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);

  // START onClick Func
  const onClickStartButton = async () => {
    if (floor === '' || room === '' || locationClass === '') {
      setPopupOpen(true);
    } else {
      setStartToggle(prev => !prev);
      const result = await handleClick();
      try {
        console.log(
          `Average Ping: ${result.avgPing}ms, Jitter: ${result.jitter}ms`
        );
        console.log(
          ` upstream: ${result.upstreamSpeed}, downstream: ${result.downstreamSpeed}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const popupClose = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '15vh',
        }}
      >
        <Button
          onClick={onClickStartButton}
          variant="contained"
          sx={{
            fontSize: '2rem',
            '@media (max-width:600px)': {
              fontSize: '2rem',
            },
            borderRadius: '15px',
            width: '300px',
            '&:hover': {
              backgroundColor: '#FFF',
              color: '#1976d2',
            },
          }}
        >
          START
        </Button>
        <Dialog open={popupOpen} onClose={popupClose}>
          <DialogTitle>위치 설정을 먼저 해주세요.</DialogTitle>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={popupClose}>확인</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default StartButton;
