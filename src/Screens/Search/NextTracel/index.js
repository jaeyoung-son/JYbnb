import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import NextTravelList from './NextTravelList';

const data = [
  [
    {
      id: 1,
      place: '경주',
      average_price: '₩76,096',
      img: require('./Assets/forest.png'),
    },
    {
      id: 2,
      place: '전주',
      average_price: '₩67,773',
      img: require('./Assets/hawai.png'),
    },
    {
      id: 3,
      place: '순천',
      average_price: '₩80,852',
      img: require('./Assets/ocean.png'),
    },
  ],
  [
    {
      id: 1,
      place: '속초',
      average_price: '₩91,553',
      img: require('./Assets/hawai.png'),
    },
    {
      id: 2,
      place: '강릉',
      average_price: '₩107,096',
      img: require('./Assets/forest.png'),
    },
    {
      id: 3,
      place: '여수시',
      average_price: '₩102,254',
      img: require('./Assets/ocean.png'),
    },
  ],
];

function NextTravel() {
  return (
    <Container>
      <Title>다음 여행</Title>
      <ListWrapper
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment="start"
        snapToInterval={Dimensions.get('window').width - 40}
        snapToEnd={false}
        decelerationRate={0}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <NextTravelList list={item} index={index} />;
        }}
      />
    </Container>
  );
}

export default NextTravel;

const Container = styled.View`
  margin-top: 50px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const ListWrapper = styled.FlatList`
  margin-top: 50px;
`;
