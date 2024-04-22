import styled from 'styled-components';
import { colors } from '../theme';

export const Container = styled.div`
  box-shadow: 0px 16px 30px #f1eaea13;
  border-radius: 12px;
  width: 36%;
  margin-left: 35%;
  margin-top: 2%;
  padding: 2em;
  background-color: white;
`;
export const FormTitle = styled.h1`
  text-align: center;
  align-items: center;
`;
export const ButtonSubmit = styled.button`
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border: 1px solid ${colors.yellow};
  background: #fff;
  margin-left: 26%;
  margin-top: 5%;
  width: 15em;
  height: 4em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.white};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  label {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  input {
    border-bottom: 1px solid ${colors.grey};
    border-left: none;
    border-top: none;
    border-right: none;
    text-align: center;
    width: 50%;
    margin-left: 25%;
  }
`;
