import React, {useEffect, useState} from 'react';
import OptionItem from './OptionItem';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

interface SectionItemProps {
  title: string;
  option: string;
  setSelectedLevel: (value: any) => void;
  selectedLevel: any;
}

const SectionItem = ({title, option, setSelectedLevel, selectedLevel}: SectionItemProps) => {
  const [optionRangeList, setOptionRangeList] = useState<Array<any>>();

  useEffect(() => {
    if (option === 'horror') {
      setOptionRangeList([4, 3, 2, 1, 0]);
    } else {
      setOptionRangeList([3, 2, 1, 0]);
    }
  }, []);

  return (
    <SectionContainer key={option}>
      <SectionTitle title={title} />
      <OptionItemScrollContainer>
        <OptionItemListContainer>
          {optionRangeList?.map((value) => {
            return <OptionItem option={option} level={value} setSelectedLevel={(result: any) => setSelectedLevel(result)} selectedLevel={selectedLevel} />;
          })}
        </OptionItemListContainer>
      </OptionItemScrollContainer>
    </SectionContainer>
  );
};

export default SectionItem;

const SectionContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionItemScrollContainer = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
`;

const OptionItemListContainer = styled.div`
  width: max-content;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
