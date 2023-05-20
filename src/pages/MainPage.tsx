import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Layout} from '../styles';
import styled, {keyframes} from 'styled-components';

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/location');
    }, 3000);
  }, []);

  return (
    <LandingLayout>
      <LogoImage src="/assets/images/whats-your-room.png" />
      <RunImage src="/assets/images/run-person.png" />
      <ArrowContainer>
        <Arrow />
        <Triangle src="/assets/icons/triangle.svg" />
      </ArrowContainer>
      <LandingInfoText>
        블라블라 우리 설명 우리 이름은 뭐다
        <br />
        우리 팀이름은 뭐고 뭐라뭐라 블라블라 이런저런 말들
      </LandingInfoText>
    </LandingLayout>
  );
};

export default MainPage;

const LandingLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
`;

const LogoImage = styled.img`
  margin-top: 40%;
  width: 220px;
  height: 96px;
`;

const run = keyframes`
from{
left: 0;
}
to{
left: 95%;
}

`;

const RunImage = styled.img`
  position: fixed;
  top: 46.5%;
  width: 35px;
  height: 35px;
  left: 0;
  animation: linear;
  animation-name: ${run};
  animation-duration: 4s;
`;

const ArrowContainer = styled.div`
  position: fixed;
  top: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  left: 0px;
  width: 90%;
  height: 6px;
  background-color: #127f00;
`;

const Triangle = styled.img`
  right: calc(10%-2px);
`;

const LandingInfoText = styled.p`
  all: unset;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 11.5px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.057em;

  color: #424242;
`;
