import React from 'react';
import styled from 'styled-components/native';
import InfoList from './InfoList';
import { Dimensions } from 'react-native';

const data = [
  {
    id: 1,
    title: '게스트를 위한 정보',
    info: ['여행 관련 업데이트', '예약 취소 옵션', '도움말 센터'],
  },
  {
    id: 2,
    title: '호스트를 위한 정보',
    info: [
      '브라이언 체스키 CEO의 메시지',
      '호스팅에 도움이 되는 자료',
      '구호 인력을 위한 숙소 제공하기',
    ],
  },
  {
    id: 3,
    title: '코로나19 구호 인력을 위한 정보',
    info: ['구호 인력을 위한 숙소', '숙소 신청', '기부하기'],
  },
  {
    id: 4,
    title: '기타',
    info: ['에어비엔비 뉴스룸', '세계 보건 기구'],
  },
];

function RecentInfo() {
  return (
    <Container>
      <Title>최신 정보 확인하기</Title>
      <InfoFlatList
        decelerationRate={0}
        snapToAlignment="start"
        snapToInterval={Dimensions.get('window').width * 0.7 + 20}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => <InfoList data={item} />}
      />
    </Container>
  );
}

export default RecentInfo;

const Container = styled.View`
  background-color: rgb(225, 230, 230);
  margin: 0 -30px;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const InfoFlatList = styled.FlatList``;
