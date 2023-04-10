import React, {useState} from 'react';
import styled from 'styled-components';
import ConfirmButton from '../components/ConfirmButton';
import {escape_room_data} from '../escape_room';
import {useAppDispatch} from '../store/config';
import {setSelectedRoom} from '../store/slices/roomSlice';
import {Layout} from '../styles';

const SEOUL_AREA_LIST = [
  '강남',
  '건대',
  '홍대',
  '신촌',
  '잠실',
  '혜화',
  '신림',
  '분당',
  '성수',
  '종각',
  '상수',
  '수유',
  '신논현',
  '대학로',
  '서울대입구',
  '노량진',
  '구로',
];
const GYEONGGI_AREA_LIST = ['수원', '성남', '일산', '인천', '부평', '부천'];
const GYEONGSANG_AREA_LIST = ['대구', '부산', '대전', '서면'];

const LocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<Array<string>>([]);

  const dispatch = useAppDispatch();

  const filterByLocation = () => {
    const locationFilteredData = escape_room_data.filter((value) =>
      selectedLocation.includes(value.지역),
    );
    dispatch(setSelectedRoom(locationFilteredData));
  };

  return (
    <Layout>
      <h2>서울</h2>
      <OptionContainer>
        {SEOUL_AREA_LIST.map((value) => {
          return (
            <OptionItem
              onClick={() => {
                alert(value + ' clicked');
                setSelectedLocation([...selectedLocation, value]);
              }}
            >
              {value}
            </OptionItem>
          );
        })}
      </OptionContainer>
      <h2>경기, 인천</h2>
      <OptionContainer>
        {GYEONGGI_AREA_LIST.map((value) => {
          return (
            <OptionItem
              onClick={() => {
                alert(value + ' clicked');
                setSelectedLocation([...selectedLocation, value]);
              }}
            >
              {value}
            </OptionItem>
          );
        })}
      </OptionContainer>
      <h2>경상</h2>
      <OptionContainer>
        {GYEONGSANG_AREA_LIST.map((value) => {
          return (
            <OptionItem
              onClick={() => {
                alert(value + ' clicked');
                setSelectedLocation([...selectedLocation, value]);
              }}
            >
              {value}
            </OptionItem>
          );
        })}
      </OptionContainer>

      <p onClick={() => filterByLocation()}> 확인</p>
      <ConfirmButton />
    </Layout>
  );
};

export default LocationPage;

// const LocationLayout = styled(Layout)`
//   padding:
// `

const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const OptionItem = styled.div`
  border: 0.5px solid #979797;
  border-radius: 100px;
  padding: 7.5px 18px;
`;
