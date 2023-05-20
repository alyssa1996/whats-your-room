import React from 'react';
import styled from 'styled-components';
import SelectedRoomItem from '../components/Result/SelectedRoomItem';
import {useAppSelector} from '../store/config';
import {Layout} from '../styles';

const ResultPage = () => {
  const {selectedRoom} = useAppSelector((state) => state.room);

  return (
    <ResultPageLayout>
      <LogoImage src="/assets/images/whats-your-room.png" />
      <SelectedRoomListContainer>
        {selectedRoom.map((room, index) => {
          return <SelectedRoomItem room={room} key={index} />;
        })}
      </SelectedRoomListContainer>
    </ResultPageLayout>
  );
};

export default ResultPage;

const ResultPageLayout = styled(Layout)`
  background-color: #e5ece5;
  padding-bottom: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 148px;
  height: 64px;
  margin-bottom: 26px;
`;

const SelectedRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
