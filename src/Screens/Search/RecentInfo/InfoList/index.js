import React from 'react';
import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

function InfoList({ data }) {
  return (
    <Container>
      <TextBox>
        <Title>{data.title}</Title>
      </TextBox>
      {data.info.map((el, index) => (
        <TextBox last={index === data.info.length - 1} key={index}>
          <InfoContext>{el}</InfoContext>
        </TextBox>
      ))}
    </Container>
  );
}

export default InfoList;

const Container = styled.View`
  width: ${Dimensions.get('window').width * 0.7}px;
  margin-top: 30px;
  margin-right: 20px;
`;

const TextBox = styled.View`
  height: 80px;
  padding: 20px 0;
  ${props =>
    !props.last &&
    css`
      border-bottom-color: gray;
      border-bottom-width: 1px;
    `}
`;

const Title = styled.Text`
  font-size: 17px;
`;

const InfoContext = styled.Text``;
