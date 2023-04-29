import React from 'react';
import styled from 'styled-components';

const LocationSectionTitle = ({title}: {title: string}) => {
  return <TitleText>{title}</TitleText>;
};

export default LocationSectionTitle;

const TitleText = styled.p`
  margin: 0;
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: -0.042em;

  color: #2a2a2a;
`;
