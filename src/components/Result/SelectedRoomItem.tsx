import React from 'react';
import styled from 'styled-components';

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

      <ThemeImage src="" alt="" />
      <OptionInfoContainer>
        <p>#난이도{room.난이도}</p>
        <p>#공포도{room.공포도}</p>
        <p>#활동성{room.활동성}</p>
        <p>#추천도{room.추천도}</p>
      </OptionInfoContainer>
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

const ThemeImage = styled.img`
  width: 294px;
  height: 153px;
  background-color: #e5ece5;
  border-radius: 7px;
  margin-top: 12px;
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

const OptionInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
