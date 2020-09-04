import React from 'react';
import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

function NextTravelList({ list, index }) {
  return (
    <MainContainer index={index}>
      <PlaceItem
        scrollEnabled={false}
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Container index={index}>
            <PlaceImage resizeMode="stretch" source={item.img} />
            <ContextWrapper>
              <PlaceLabel>{item.place}</PlaceLabel>
              <AverageWrapper>
                <AverageExplain>1박당 평균</AverageExplain>
                <AverageValue>{item.average_price}</AverageValue>
              </AverageWrapper>
            </ContextWrapper>
          </Container>
        )}
      />
    </MainContainer>
  );
}

export default NextTravelList;

const MainContainer = styled.View`
  width: ${Dimensions.get('window').width - 60}px;
  ${props =>
    props.index &&
    css`
      margin-left: -30px;
    `}
`;

const PlaceItem = styled.FlatList``;

const Container = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const PlaceImage = styled.Image`
  border-radius: 20px;
  width: 100px;
  height: 100px;
`;

const ContextWrapper = styled.View`
  margin-left: 20px;
  padding: 20px 0;
`;

const PlaceLabel = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const AverageWrapper = styled.View`
  flex-direction: row;
`;

const AverageExplain = styled.Text`
  font-size: 16px;
`;

const AverageValue = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-left: 3px;
`;
