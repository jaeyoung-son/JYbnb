import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

function ContentsCard({ item, index }) {
  return (
    <Container index={index}>
      <Image resizeMode="stretch" source={item.img} />
      <ContextWrapper>
        <ContextLabel>{item.label}</ContextLabel>
      </ContextWrapper>
    </Container>
  );
}

export default ContentsCard;

const Container = styled.View`
  width: ${Dimensions.get('window').width * 0.7}px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 15px;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;
`;

const ContextWrapper = styled.View`
  background-color: rgb(35, 35, 35);
  padding: 10px;
  height: 70px;
`;

const ContextLabel = styled.Text`
  font-size: 16px;
  color: white;
`;
