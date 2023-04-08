import React from 'react';
import styled from 'styled-components';
import {Layout} from '../styles';

const ConfirmButton = () => {
  return (
    <ButtonLayout>
      <InitializeButton>초기화</InitializeButton>
      <SelectButton>선택완료</SelectButton>
    </ButtonLayout>
  );
};

export default ConfirmButton;

const ButtonLayout = styled(Layout)`
  width: 100%;
  height: auto;
  display: flex;
`;

const InitializeButton = styled.div`
  width: 35%;
  padding: 17px 0px;
  margin: 0 auto;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectButton = styled(InitializeButton)`
  width: 65%;
  background-color: #127f00;
`;
