import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import FinalActionButtons from '../components/FinalActionButtons';
import {useAppDispatch, useAppSelector} from '../store/config';
import {setSelectedRoom} from '../store/slices/roomSlice';
import {Layout} from '../styles';
import SelectionTitle from '../components/SelectionTitle';
import SectionItem from '../components/Option/SectionItem';

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
      <SectionItem
        title="난이도"
        option="difficulty"
        setSelectedLevel={(result: any) => setSelectedDifficultyLevel(result)}
        selectedLevel={selectedDifficultyLevel}
      />

      <SectionItem
        title="추천도"
        option="recommend"
        setSelectedLevel={(result: any) => setSelectedRecommendationLevel(result)}
        selectedLevel={selectedRecommendationLevel}
      />

      <SectionItem title="활동성" option="activity" setSelectedLevel={(result: any) => setSelectedActiveLevel(result)} selectedLevel={selectedActiveLevel} />

      <SectionItem title="공포도" option="horror" setSelectedLevel={(result: any) => setSelectedHorrorLevel(result)} selectedLevel={selectedHorrorLevel} />

      <FinalActionButtons onHandleReset={() => handleReset()} onHandleConfirm={() => handleConfirm()} isConfirmDisabled={false} isInitializeDisabled={false} />
    </OptionsPageLayout>
  );
};

export default OptionsPage;

const OptionsPageLayout = styled(Layout)`
  overflow: hidden;
`;
