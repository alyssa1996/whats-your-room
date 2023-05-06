import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {options} from '../../data/option_level';

interface OptionItemProps {
  option: string;
  level: number;
  onClick: () => void;
  //   isSelected: boolean;
  selectedLevels: Set<number | undefined>;
}

const OptionItem = ({option, level, onClick, selectedLevels}: OptionItemProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    console.log('here??');
    if (selectedLevels && selectedLevels.has(level)) setIsSelected(true);
  }, [selectedLevels]);

  return (
    <OptionItemContainer key={`${option}_${level}`} onClick={onClick} isSelected={isSelected}>
      <OptionIcon src={`/assets/icons/${option}/${option}_${level}.svg`} />
      <OptionTitle>{options[option][level]}</OptionTitle>
    </OptionItemContainer>
  );
};

export default OptionItem;

const OptionItemContainer = styled.div<{isSelected: boolean}>`
  width: 92px;
  height: 92px;
  border: 0.5px solid #979797;
  border-radius: 9px;
  padding: 14px 11px 9px 11px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${({isSelected}) =>
    isSelected &&
    `
    background: #E5ECE5;
border: 1px solid #127F00;


box-shadow: 1px 1px 2px rgba(91, 91, 91, 0.3);
border-radius: 9px;
  `}
`;

const OptionIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const OptionTitle = styled.p`
  margin: 0;
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.042em;

  color: #2a2a2a;
`;
