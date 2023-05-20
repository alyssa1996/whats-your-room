import React from 'react';
import styled from 'styled-components';
import SelectedRoomOptions from './SelectedRoomOptions';

interface SelectedRoomItemProps {
  room: any;
}

const SelectedRoomItem = ({room}: SelectedRoomItemProps) => {
  return (
    <SelectedRoomContainer>
      <RoomThemeName>{room.테마명}</RoomThemeName>

      <LocationInfoContainer>
        <InfoDetailContainer>
          <InfoIcon src="/assets/icons/home.svg" />
          <InfoText>
            {room.지점명} {room.호점}
          </InfoText>
        </InfoDetailContainer>
        <InfoDetailContainer>
          <InfoIcon src="/assets/icons/location.svg" />
          <InfoText>{room.지역}</InfoText>
        </InfoDetailContainer>
      </LocationInfoContainer>
      <ThemeImageContainer>
        <ThemeImage src="/assets/images/gray-whats-your-room.png" alt="" />
      </ThemeImageContainer>

      <HorizontalLine />

      <SelectedRoomOptions roomInfo={room} />
    </SelectedRoomContainer>
  );
};

export default SelectedRoomItem;

const SelectedRoomContainer = styled.div`
  width: 325px;
  height: auto;
  background: #ffffff;
  box-shadow: 1px 1px 2px rgba(91, 91, 91, 0.3);
  border-radius: 14px;
  padding: 19px 16px 13px 15px;
  box-sizing: border-box;
`;

const RoomThemeName = styled.div`
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: -0.042em;

  color: #127f00;
`;

const ThemeImageContainer = styled.div`
  width: 294px;
  height: 153px;
  background-color: #f1f1f1;
  border-radius: 7px;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeImage = styled.img`
  width: 172px;
  height: 88px;
`;

const LocationInfoContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 8px;
`;

const InfoDetailContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const InfoIcon = styled.img``;

const InfoText = styled.p`
  margin: 0;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.042em;

  color: #2a2a2a;
`;

const HorizontalLine = styled.div`
  width: 100%;
  margin: 12px 0px;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
`;
