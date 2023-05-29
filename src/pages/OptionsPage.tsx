import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import FinalActionButtons from '../components/FinalActionButtons';
import {useAppDispatch, useAppSelector} from '../store/config';
import {setSelectedRoom} from '../store/slices/roomSlice';
import {Layout} from '../styles';
import SelectionTitle from '../components/SelectionTitle';
import SectionTitle from '../components/SectionTitle';
import OptionItem from '../components/Option/OptionItem';

const OptionsPage = () => {
  const {selectedRoom} = useAppSelector((state) => state.room);
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<Set<number | undefined>>(new Set());
  const [selectedHorrorLevel, setSelectedHorrorLevel] = useState<Set<number | undefined>>(new Set());
  const [selectedActiveLevel, setSelectedActiveLevel] = useState<Set<number | undefined>>(new Set());
  const [selectedRecommendationLevel, setSelectedRecommendationLevel] = useState<Set<number>>(new Set());
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    setSelectedDifficultyLevel(new Set());
    setSelectedHorrorLevel(new Set());
    setSelectedActiveLevel(new Set());
    setSelectedRecommendationLevel(new Set());
  };

  const handleConfirm = () => {
    const difficultyFilteredData: any = selectedRoom.filter((value) => selectedDifficultyLevel.has(value?.난이도));
    const horrorFilteredData: any = difficultyFilteredData.filter((value: any) => selectedHorrorLevel.has(value?.공포도));
    const activeFilteredData: any = horrorFilteredData.filter((value: any) => selectedActiveLevel.has(value?.활동성));
    const recommendationFilteredData: any = activeFilteredData.filter((value: any) => selectedRecommendationLevel.has(value?.추천도));
    dispatch(setSelectedRoom(recommendationFilteredData));
    navigate('/results');
  };

  return (
    <OptionsPageLayout>
      <SelectionTitle step={2} title={'어떤 방탈출을 원하는 지 골라주세요'} />
      <SectionContainer>
        <SectionTitle title="난이도" />
        <OptionItemListContainer>
          {[3, 2, 1, 0].map((value) => {
            return (
              <OptionItem
                option="difficulty"
                level={value}
                setSelectedLevel={(result: any) => setSelectedDifficultyLevel(result)}
                selectedLevel={selectedDifficultyLevel}
              />
            );
          })}
        </OptionItemListContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="추천도" />
        <OptionItemListContainer>
          {[3, 2, 1, 0].map((value) => {
            return (
              <OptionItem
                option="recommend"
                level={value}
                setSelectedLevel={(result: any) => setSelectedRecommendationLevel(result)}
                selectedLevel={selectedRecommendationLevel}
              />
            );
          })}
        </OptionItemListContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="활동성" />
        <OptionItemListContainer>
          {[3, 2, 1, 0].map((value) => {
            return (
              <OptionItem
                option="activity"
                level={value}
                setSelectedLevel={(result: any) => setSelectedActiveLevel(result)}
                selectedLevel={selectedActiveLevel}
              />
            );
          })}
        </OptionItemListContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="공포도" />
        <OptionItemListContainer>
          {[4, 3, 2, 1, 0].map((value) => {
            return (
              <OptionItem
                option="horror"
                level={value}
                setSelectedLevel={(result: any) => setSelectedHorrorLevel(result)}
                selectedLevel={selectedHorrorLevel}
              />
            );
          })}
        </OptionItemListContainer>
      </SectionContainer>

      <FinalActionButtons onHandleReset={() => handleReset()} onHandleConfirm={() => handleConfirm()} isConfirmDisabled={false} isInitializeDisabled={false} />
    </OptionsPageLayout>
  );
};

export default OptionsPage;

const OptionsPageLayout = styled(Layout)`
  overflow: hidden;
`;

const SectionContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionItemListContainer = styled.div`
  width: max-content;
  overflow-x: scroll;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
