import React from 'react';
import styled from 'styled-components/native';
import ContentsCard from './CotentsCard';
import { Dimensions } from 'react-native';

const data = [
  {
    id: 1,
    img: require('./Assets/allison.png'),
    label: '라스베이거스 댄서의 하루',
  },
  {
    id: 2,
    img: require('./Assets/aiisha.png'),
    label: '아이샤 잭슨과 함께하는 사랑,빛,치유의 저녁',
  },
  {
    id: 3,
    img: require('./Assets/merv.png'),
    label: '마술과 독심술을 즐기는 법',
  },
  {
    id: 4,
    img: require('./Assets/pedro.png'),
    label: '라이브 뮤지컬 참여하기',
  },
];

function BroadwayOnline() {
  return (
    <Container>
      <TextWrapper>
        <Title>브로드웨이 온라인 체험</Title>
        <Context>
          슬기로운 집콕 생활을 위한 색다른 방법 - 실시간으로 진행되는 인터렉티브
          브로드웨이 공연에 참여하고 출연진과 대화를 나눠보세요.
        </Context>
      </TextWrapper>
      <CardList
        decelerationRate={0}
        snapToInterval={Dimensions.get('window').width * 0.7 + 15}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => (
          <ContentsCard item={item} index={index} />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <MoreBtn>
        <MoreText>모두 둘러보기</MoreText>
      </MoreBtn>
    </Container>
  );
}

export default BroadwayOnline;

const Container = styled.View`
  margin: 30px -30px;
  padding: 30px 0;
  background-color: black;
`;

const TextWrapper = styled.View`
  margin: 0 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
`;

const Context = styled.Text`
  font-size: 18px;
  margin: 15px 0;
  color: white;
`;

const MoreBtn = styled.TouchableOpacity`
  width: 100px;
  margin: 20px 30px 0;

  border-radius: 20px;
  border: 1px solid white;
  padding: 5px 10px;
`;
const MoreText = styled.Text`
  color: white;
`;

const CardList = styled.FlatList`
  padding-left: 30px;
`;
