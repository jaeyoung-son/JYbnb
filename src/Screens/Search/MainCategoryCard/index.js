import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const data = [
  {
    id: 1,
    title: '온라인 체험',
    context: '세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티',
    img: require('./Assets/online.png'),
  },
  {
    id: 2,
    title: '독특한 공간',
    context: '단순한 숙소 이상의 특별함이 담긴 공간',
    img: require('./Assets/special.png'),
  },
  {
    id: 3,
    title: '집 전체',
    context:
      '일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.',
    img: require('./Assets/home.png'),
  },
];

function MainCategoryCard() {
  return (
    <Container>
      <List
        decelerationRate={0}
        snapToInterval={Dimensions.get('window').width / 1.5 + 10}
        // pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => {
          return (
            <CardWrapper first={index === 0 ? true : false}>
              <Image resizeMode="stretch" source={item.img} />
              <ContextWrapper>
                <CardTitle>{item.title}</CardTitle>
                <CardContext>{item.context}</CardContext>
              </ContextWrapper>
            </CardWrapper>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

export default MainCategoryCard;

const Container = styled.SafeAreaView`
  margin-top: 50px;
  margin-left: -30px;
`;

const CardWrapper = styled.View`
  overflow: hidden;
  width: ${Dimensions.get('window').width / 1.5}px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: ${props => (props.first ? '30px' : 0)};
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

const ContextWrapper = styled.View`
  padding: 10px;
  padding-right: 20px;
  height: 90px;
  background-color: white;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const CardContext = styled.Text`
  margin-top: 10px;
  color: gray;
  font-size: 14px;
`;

const List = styled.FlatList`
  margin-right: -30px;
`;
