import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Animated } from 'react-native';

const SearchInput = () => {
  const searchbarPos = useRef(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Touch
      onPress={() => {
        navigation.navigate('SearchModal');
        console.log('ho');
      }}
    >
      <Container ref={searchbarPos}>
        <Wrapper>
          <Image source={require('../../../Assets/search.png')} />
          <Text>어디로 여행가세요?</Text>
        </Wrapper>
      </Container>
    </Touch>
  );
};

export default SearchInput;

const Touch = styled.TouchableWithoutFeedback``;

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
`;

const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  border: 0.2px solid #929292;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  justify-content: center;
`;

const Image = styled.Image`
  margin-right: 15px;
  width: 25px;
  height: 25px;
`;

const Text = styled.Text`
  font-size: 16px;
`;

// const HeaderContainer = styled.Animated.View`
//   flex: 1;
//   margin-left: -30px;
//   margin-right: -30px;
//   padding: 30px;
//   background-color: powderblue;
//   position: absolute;
//   height: ${MAX_HEIGHT}px;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `;

const HeaderWrapper = styled.View`
  width: ${Dimensions.get('window').width - 60}px;
  margin-left: 30px;
  background-color: rgb(204, 209, 209);
  height: 50px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
