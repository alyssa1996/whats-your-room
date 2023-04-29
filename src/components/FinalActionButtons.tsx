import React from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
  onHandleReset: () => void;
  onHandleConfirm: () => void;
  isInitializeDisabled: boolean;
  isConfirmDisabled: boolean;
}

const FinalActionButtons = ({onHandleReset, onHandleConfirm, isInitializeDisabled, isConfirmDisabled}: ActionButtonProps) => {
  return (
    <ButtonLayout>
      <InitializeButton
        isInitializeDisabled={isInitializeDisabled}
        onClick={() => {
          // if (isInitializeDisabled) return;
          onHandleReset();
        }}
      >
        초기화
      </InitializeButton>
      <SelectConfirmButton
        isConfirmDisabled={isConfirmDisabled}
        onClick={() => {
          // if (isConfirmDisabled) return;
          onHandleConfirm();
        }}
      >
        선택완료
      </SelectConfirmButton>
    </ButtonLayout>
  );
};

export default FinalActionButtons;

const ButtonLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
`;

const InitializeButton = styled.div<{isInitializeDisabled: boolean}>`
  width: 35%;
  padding: 17px 0px;
  margin: 0 auto;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({isInitializeDisabled}) => (isInitializeDisabled ? 'white' : '#2A2A2A')};
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.042em;
`;

const SelectConfirmButton = styled.div<{isConfirmDisabled: boolean}>`
  padding: 17px 0px;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({isConfirmDisabled}) => (isConfirmDisabled ? '#e4e4e4' : '#127f00')};

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.042em;

  color: #ffffff;
`;
