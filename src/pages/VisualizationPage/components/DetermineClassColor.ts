import { useRecoilValue } from 'recoil';
import { PositionSpeedMapState } from '../../../module/Atom';
import DetermineColorLabel from './DetermineColorLabel';

// floor, room을 Input으로 사용하여 평균속도를 계산하고 Color label을 반환한다.
export const DetermineClassColor = (
  floor: string,
  room: string,
  curClass: string
): string => {
  const filteredData = useRecoilValue(PositionSpeedMapState);

  let totalNumberOfData = 0;
  let totalDownstreamSpeed = 0;

  const key = `floorNumber:${floor},roomNumber:${room},locationClass:${curClass}`;

  const NetworkIndexArray = filteredData.get(key);

  console.log('=========================');
  console.log('Floor: ', floor, ' Room: ', room, ' CurClass: ', curClass);
  console.log(NetworkIndexArray);

  if (typeof NetworkIndexArray !== 'undefined') {
    const numberOfData = NetworkIndexArray.length;
    totalNumberOfData += numberOfData;

    NetworkIndexArray.forEach(classItem => {
      totalDownstreamSpeed += classItem.dlStatus;
    });
  }

  const averageOfDownstreamSpeed = totalDownstreamSpeed / totalNumberOfData;

  const returnColor: string = DetermineColorLabel(averageOfDownstreamSpeed);
  console.log(returnColor);
  console.log('======================');
  // 색상 레이블 리턴
  return returnColor;
};

export default DetermineClassColor;
