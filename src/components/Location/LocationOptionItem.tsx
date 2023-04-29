import React, {useState} from 'react';
import styled from 'styled-components';

interface LocationOptionItemProps {
  setSelectedLocation: (value: any) => void;
  selectedLocation: Set<string>;
  optionValue: string;
}

const LocationOptionItem = ({selectedLocation, optionValue, setSelectedLocation}: LocationOptionItemProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const onOptionClick = () => {
    setIsSelected(!isSelected);
    if (selectedLocation && selectedLocation.has(optionValue)) {
      selectedLocation.delete(optionValue);
      setSelectedLocation(selectedLocation);
    } else {
      selectedLocation.add(optionValue);
      setSelectedLocation(selectedLocation);
    }
    console.log('here', selectedLocation);
  };

  return (
    <OptionItem onClick={onOptionClick} isSelected={isSelected} key={optionValue}>
      {optionValue}
    </OptionItem>
  );
};

export default LocationOptionItem;

const OptionItem = styled.div<{isSelected: boolean | undefined}>`
  border: 0.5px solid #979797;
  border-radius: 100px;
  padding: 7.5px 18px;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.042em;

  color: #2a2a2a;

  ${({isSelected}) =>
    isSelected &&
    `
  border: 1px solid #127F00;
  box-shadow: 1px 1px 2px rgba(91, 91, 91, 0.3);
  color: #127F00;
  font-weight: 400;
  `}
`;
