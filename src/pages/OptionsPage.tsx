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
  const [selectedRecommendationLevel, setSelectedRecommendationLevel] = useState<Set<number>>(new Set([0, 1, 2, 3, 4]));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [selectedDifficultyLevel, selectedActiveLevel, selectedHorrorLevel, selectedRecommendationLevel]);

  const handleClickSelectedOption = (options: 'difficulty' | 'horror' | 'activity' | 'recommend' | 'reset', selectedLevel: number) => {
    alert(options + ' ' + selectedLevel);

    switch (options) {
      case 'difficulty':
        console.log(options, selectedLevel);
        if (selectedDifficultyLevel.has(selectedLevel)) {
          selectedDifficultyLevel.delete(selectedLevel);
          setSelectedDifficultyLevel(selectedDifficultyLevel);
        } else setSelectedDifficultyLevel(selectedDifficultyLevel.add(selectedLevel));
        break;
      case 'horror':
        if (selectedHorrorLevel.has(selectedLevel)) {
          selectedHorrorLevel.delete(selectedLevel);
          setSelectedHorrorLevel(selectedHorrorLevel);
        } else {
          setSelectedHorrorLevel(selectedHorrorLevel.add(selectedLevel));
        }
        break;
      case 'activity':
        if (selectedActiveLevel.has(selectedLevel)) {
          selectedActiveLevel.delete(selectedLevel);
          setSelectedActiveLevel(selectedActiveLevel);
        } else {
          setSelectedActiveLevel(selectedActiveLevel.add(selectedLevel));
        }
        break;
      case 'recommend':
        if (selectedRecommendationLevel.has(selectedLevel)) {
          selectedRecommendationLevel.delete(selectedLevel);
          setSelectedRecommendationLevel(selectedRecommendationLevel);
        } else {
          setSelectedRecommendationLevel(selectedRecommendationLevel.add(selectedLevel));
        }
        break;
    }
  };

  const handleReset = () => {
    setSelectedDifficultyLevel(new Set());
    setSelectedHorrorLevel(new Set());
    setSelectedActiveLevel(new Set());
    setSelectedRecommendationLevel(new Set());
  };

  const handleConfirm = () => {
    const difficultyFilteredData = selectedRoom.filter((value) => selectedDifficultyLevel.has(value?.난이도));
    const horrorFilteredData = difficultyFilteredData.filter((value) => selectedHorrorLevel.has(value?.공포도));
    const activeFilteredData = horrorFilteredData.filter((value) => selectedActiveLevel.has(value?.활동성));
    // todo :활동성 추가
    // const recommendationFilteredData = activeFilteredData.filter((value) => ['S', 'A+', 'A'].includes(value?.추천도));
    dispatch(setSelectedRoom(activeFilteredData));
    console.log(activeFilteredData);
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
                onClick={() => handleClickSelectedOption('difficulty', value)}
                selectedLevels={selectedDifficultyLevel}
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
                onClick={() => handleClickSelectedOption('recommend', value)}
                selectedLevels={selectedRecommendationLevel}
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
              <OptionItem option="activity" level={value} onClick={() => handleClickSelectedOption('activity', value)} selectedLevels={selectedActiveLevel} />
            );
          })}
        </OptionItemListContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="공포도" />
        <OptionItemListContainer>
          {[4, 3, 2, 1, 0].map((value) => {
            return <OptionItem option="horror" level={value} onClick={() => handleClickSelectedOption('horror', value)} selectedLevels={selectedHorrorLevel} />;
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
