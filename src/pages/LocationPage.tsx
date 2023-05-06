import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import FinalActionButtons from '../components/FinalActionButtons';
import LocationOptionItem from '../components/Location/LocationOptionItem';
import SectionTitle from '../components/SectionTitle';
import SelectionTitle from '../components/SelectionTitle';
import {escape_room_data} from '../data/escape_room';
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
  const [selectedLocation, setSelectedLocation] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('in effect :', selectedLocation);
  }, [selectedLocation]);

  const filterByLocation = () => {
    const locationFilteredData = escape_room_data.filter((value: any) => selectedLocation.has(value.지역));
    dispatch(setSelectedRoom(locationFilteredData));
    navigate('/options');
  };

  const onSetSelectedOption = (updatedList: any) => {
    setSelectedLocation(updatedList);
  };

  const checkSelectedLocation = useCallback(() => {
    return selectedLocation.size === 0;
  }, [selectedLocation]);

  return (
    <Layout>
      <SelectionTitle step={1} title={'방탈출을 하고 싶은 지역을 골라주세요'} />
      <SectionContainer>
        <SectionTitle title="서울" />
        <OptionContainer>
          {SEOUL_AREA_LIST.map((value) => {
            return <LocationOptionItem setSelectedLocation={onSetSelectedOption} selectedLocation={selectedLocation} optionValue={value} />;
          })}
        </OptionContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="경기, 인천" />
        <OptionContainer>
          {GYEONGGI_AREA_LIST.map((value) => {
            return <LocationOptionItem setSelectedLocation={onSetSelectedOption} selectedLocation={selectedLocation} optionValue={value} />;
          })}
        </OptionContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="영남" />
        <OptionContainer>
          {GYEONGSANG_AREA_LIST.map((value) => {
            return <LocationOptionItem setSelectedLocation={onSetSelectedOption} selectedLocation={selectedLocation} optionValue={value} />;
          })}
        </OptionContainer>
      </SectionContainer>

      <FinalActionButtons
        onHandleReset={() => setSelectedLocation(new Set())}
        onHandleConfirm={() => filterByLocation()}
        isConfirmDisabled={checkSelectedLocation()}
        isInitializeDisabled={checkSelectedLocation()}
      />
    </Layout>
  );
};

export default LocationPage;

// const LocationLayout = styled(Layout)`
//   padding:
// `

const SectionContainer = styled.div`
  margin-top: 32px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;
