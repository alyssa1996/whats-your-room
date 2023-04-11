import React from 'react';
import styled from 'styled-components';
import {Layout} from '../styles';

interface ActionButtonProps {
  onHandleReset: () => void;
  onHandleConfirm: () => void;
}

const FinalActionButtons = ({onHandleReset, onHandleConfirm}: ActionButtonProps) => {
  return (
    <ButtonLayout>
      <InitializeButton onClick={() => onHandleReset()}>초기화</InitializeButton>
      <SelectButton onClick={() => onHandleConfirm()}>선택완료</SelectButton>
    </ButtonLayout>
  );
};

export default FinalActionButtons;

const ButtonLayout = styled(Layout)`
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  bottom: 0px;
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
