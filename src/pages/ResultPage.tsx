import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../store/config';
import {Layout} from '../styles';

const ResultPage = () => {
  const {selectedRoom} = useAppSelector((state) => state.room);

  return (
    <Layout>
      <SelectedRoomListContainer>
        {selectedRoom.map((room, index) => {
          return (
            <SelectedRoomItem key={index}>
              <RoomThemeName>{room.테마명}</RoomThemeName>
              <LocationInfoContainer>
                <p>
                  {room.지점명} {room.호점}
                </p>
                <p>{room.지역}</p>
              </LocationInfoContainer>
              <OptionInfoContainer>
                <p>#난이도{room.난이도}</p>
                <p>#공포도{room.공포도}</p>
                <p>#활동성{room.활동성}</p>
                <p>#추천도{room.추천도}</p>
              </OptionInfoContainer>
            </SelectedRoomItem>
          );
        })}
      </SelectedRoomListContainer>
    </Layout>
  );
};

export default ResultPage;

const SelectedRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const SelectedRoomItem = styled.div`
  width: 325px;
  height: 295px;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(91, 91, 91, 0.3);
  border-radius: 14px;
  padding: 24px 30px 18px 30px;
`;

const RoomThemeName = styled.div`
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: -0.042em;

  color: #127f00;
`;

const LocationInfoContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const OptionInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
