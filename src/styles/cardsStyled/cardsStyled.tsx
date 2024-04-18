import styled from 'styled-components';
import { colors } from '../theme';

export const Subtitle = styled.h1`
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-top: 5%;
  color: ${colors.red};
`;

export const Card = styled.div`
  cursor: pointer;
  background: #f4f1e7;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.5);
  padding: 10% 6% 3%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    background: #f4f1e7;
    box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.5);
    width: 250px;
    height: 315px;
    object-fit: cover;
  }
`;
export const ButtonCard = styled.button`
  width: 10em;
  height: 3em;
  cursor: pointer;
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export const Gallery = styled.section`
  display: grid;
  align-items: center;
  padding: 5%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  margin-top: 5%;
`;
export const TitleGallery = styled.h4`
  color: ${colors.black};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;
export const TextGallery = styled.h4`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const TextPrice = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
export const IconsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
`;
