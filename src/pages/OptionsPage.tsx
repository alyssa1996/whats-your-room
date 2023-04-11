import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FinalActionButtons from '../components/\bFinalActionButtons';
import {useAppDispatch, useAppSelector} from '../store/config';
import {setSelectedRoom} from '../store/slices/roomSlice';
import {Layout} from '../styles';

const OptionsPage = () => {
  const {selectedRoom} = useAppSelector((state) => state.room);
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<Array<number>>([0, 1, 2, 3]);
  const [selectedHorrorLevel, setSelectedHorrorLevel] = useState<Array<number>>([0, 1, 2, 3, 4]);
  const [selectedActiveLevel, setSelectedActiveLevel] = useState<Array<number>>([0, 1, 2, 3]);
  const [selectedRecommendationLevel, setSelectedRecommendationLevel] = useState<Array<number>>([0, 1, 2, 3, 4]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(selectedRoom);
  }, []);

  const handleClickSelectedOption = (options: 'Difficulty' | 'Horror' | 'Active' | 'Recommendation' | 'Reset', selectedLevel: number) => {
    console.log(options, selectedLevel);
    switch (options) {
      case 'Difficulty':
        setSelectedDifficultyLevel([...selectedDifficultyLevel, selectedLevel]);
        break;
      case 'Horror':
        setSelectedHorrorLevel([...selectedHorrorLevel, selectedLevel]);
        break;
      case 'Active':
        setSelectedActiveLevel([...selectedActiveLevel, selectedLevel]);
        break;
      case 'Recommendation':
        setSelectedRecommendationLevel([...selectedRecommendationLevel, selectedLevel]);
        break;
    }
  };

  const handleReset = () => {
    setSelectedDifficultyLevel([]);
    setSelectedHorrorLevel([]);
    setSelectedActiveLevel([]);
    setSelectedRecommendationLevel([]);
  };

  const handleConfirm = () => {
    const difficultyFilteredData = selectedRoom.filter((value) => selectedDifficultyLevel.includes(value?.난이도));
    const horrorFilteredData = difficultyFilteredData.filter((value) => selectedHorrorLevel.includes(value?.공포도));
    const activeFilteredData = horrorFilteredData.filter((value) => selectedActiveLevel.includes(value?.활동성));
    // todo :활동성 추가
    const recommendationFilteredData = activeFilteredData.filter((value) => ['S', 'A+', 'A'].includes(value?.추천도));
    dispatch(setSelectedRoom(recommendationFilteredData));
    console.log(recommendationFilteredData);
  };

  return (
    <Layout>
      <h2>난이도</h2>
      <OptionLayout>
        <p onClick={() => handleClickSelectedOption('Difficulty', 0)}>0</p>
        <p onClick={() => handleClickSelectedOption('Difficulty', 1)}>1</p>
        <p onClick={() => handleClickSelectedOption('Difficulty', 2)}>2</p>
        <p onClick={() => handleClickSelectedOption('Difficulty', 3)}>3</p>
      </OptionLayout>
      <h2>공포도</h2>
      <OptionLayout>
        <p onClick={() => handleClickSelectedOption('Horror', 0)}>0</p>
        <p onClick={() => handleClickSelectedOption('Horror', 1)}>1</p>
        <p onClick={() => handleClickSelectedOption('Horror', 2)}>2</p>
        <p onClick={() => handleClickSelectedOption('Horror', 3)}>3</p>
        <p onClick={() => handleClickSelectedOption('Horror', 4)}>4</p>
      </OptionLayout>
      <h2>활동성</h2>
      <OptionLayout>
        <p onClick={() => handleClickSelectedOption('Active', 0)}>0</p>
        <p onClick={() => handleClickSelectedOption('Active', 1)}>1</p>
        <p onClick={() => handleClickSelectedOption('Active', 2)}>2</p>
        <p onClick={() => handleClickSelectedOption('Active', 3)}>3</p>
      </OptionLayout>
      <h2>추천도</h2>

      <FinalActionButtons onHandleReset={() => handleReset()} onHandleConfirm={() => handleConfirm()} />
    </Layout>
  );
};

export default OptionsPage;

const OptionLayout = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
