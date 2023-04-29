import React from 'react';
import styled from 'styled-components';

interface SelectionTitleProps {
  step: number;
  title: string;
}

const SelectionTitle = ({step, title}: SelectionTitleProps) => {
  return (
    <>
      <StepMarkText>
        <CurrentStepText>{step}</CurrentStepText>
        /2
      </StepMarkText>
      <StepTitle>{title}</StepTitle>
      <StepSubTitle>중복 선택 가능</StepSubTitle>
    </>
  );
};

export default SelectionTitle;

const StepMarkText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: -0.057em;

  color: rgba(151, 151, 151, 1);
`;

const CurrentStepText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: -0.057em;

  color: #127f00;
`;

const StepTitle = styled.p`
  margin: 0;
  margin-top: 10px;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: -0.042em;

  color: #2a2a2a;
`;

const StepSubTitle = styled.p`
  margin: 0;
  margin-top: 5px;

  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 13px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.057em;

  color: #979797;
`;
