import React from 'react';
import styled from 'styled-components';
import {options} from '../../data/option_level';

const SelectedRoomOptions = ({roomInfo}: {roomInfo: any}) => {
  return (
    <OptionsContainer>
      <OptionSet>
        <OptionIcon src={`/assets/icons/difficulty/difficulty_${roomInfo.난이도}.svg`} />
        <OptionTitle>{options.difficulty[roomInfo.난이도]}</OptionTitle>
      </OptionSet>

      <OptionSet>
        <OptionIcon src={`/assets/icons/recommend/recommend_${roomInfo.추천도}.svg`} />
        <OptionTitle>{options.recommend[roomInfo.추천도]}</OptionTitle>
      </OptionSet>

      <OptionSet>
        <OptionIcon src={`/assets/icons/activity/activity_${roomInfo.활동성}.svg`} />
        <OptionTitle>{options.activity[roomInfo.활동성]}</OptionTitle>
      </OptionSet>

      <OptionSet>
        <OptionIcon src={`/assets/icons/horror/horror_${roomInfo.공포도}.svg`} />
        <OptionTitle>{options.horror[roomInfo.공포도]}</OptionTitle>
      </OptionSet>
    </OptionsContainer>
  );
};

export default SelectedRoomOptions;

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const OptionSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const OptionIcon = styled.img`
  width: 27px;
  height: 27px;
`;

const OptionTitle = styled.p`
  margin: 0;
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 10px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.042em;

  color: #2a2a2a;
`;
