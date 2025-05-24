import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: inherit;
    background-color: #f5f5f5;
    text-align: center;
`;

export const Message = styled.h1`
    font-size: 3rem;
    color: #333;
    margin: 20px 0;
`;

export const ImageContainer = styled.div`
    max-width: 600px;
    width: 100%;s
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.button`
  width: 150px;
  height: 35px;
  margin-right: 25px;
  border-radius: 5px;
  border-style: none;
  
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    cursor: pointer;
  }
`;

export const Icon = styled.img``;