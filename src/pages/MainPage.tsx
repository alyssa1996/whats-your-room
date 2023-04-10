import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Layout} from '../styles';

const MainPage = () => {
  const navigate = useNavigate();
  return <Layout onTouchStart={() => navigate('/location')}>Click here to start!</Layout>;
};

export default MainPage;
