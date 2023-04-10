import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ConfirmButton from '../components/ConfirmButton';
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

  const handleClickSeclectedOption = (options: 'Difficulty' | 'Horror' | 'Active' | 'Recommendation', selectedLevel: number) => {
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

  const handleConfirm = () => {
    const difficultyFilteredData = selectedRoom.filter((value) => selectedDifficultyLevel.includes(value?.난이도));
    const horrorFilteredData = difficultyFilteredData.filter((value) => selectedHorrorLevel.includes(value?.공포도));
    const activeFilteredData = horrorFilteredData.filter((value) => selectedActiveLevel.includes(value?.활동성));
    // todo :활동성 추가
    const recommendationFilteredData = activeFilteredData.filter((value) => ['S', 'A+', 'A'].includes(value?.추천도));
    dispatch(setSelectedRoom(recommendationFilteredData));
  };

  return (
    <Layout>
      <h2>난이도</h2>
      <OptionLayout>
        <p onClick={() => handleClickSeclectedOption('Difficulty', 0)}>0</p>
        <p onClick={() => handleClickSeclectedOption('Difficulty', 1)}>1</p>
        <p onClick={() => handleClickSeclectedOption('Difficulty', 2)}>2</p>
        <p onClick={() => handleClickSeclectedOption('Difficulty', 3)}>3</p>
      </OptionLayout>
      <h2>공포도</h2>
      <OptionLayout>
        <p onClick={() => handleClickSeclectedOption('Horror', 0)}>0</p>
        <p onClick={() => handleClickSeclectedOption('Horror', 1)}>1</p>
        <p onClick={() => handleClickSeclectedOption('Horror', 2)}>2</p>
        <p onClick={() => handleClickSeclectedOption('Horror', 3)}>3</p>
        <p onClick={() => handleClickSeclectedOption('Horror', 4)}>4</p>
      </OptionLayout>
      <h2>활동성</h2>
      <OptionLayout>
        <p onClick={() => handleClickSeclectedOption('Active', 0)}>0</p>
        <p onClick={() => handleClickSeclectedOption('Active', 1)}>1</p>
        <p onClick={() => handleClickSeclectedOption('Active', 2)}>2</p>
        <p onClick={() => handleClickSeclectedOption('Active', 3)}>3</p>
      </OptionLayout>
      <h2>추천도</h2>

      <h4 onClick={() => handleConfirm()}>확인</h4>
      <ConfirmButton />
    </Layout>
  );
};

export default OptionsPage;

export const OptionLayout = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
