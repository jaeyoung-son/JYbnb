import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import SearchInput from './SearchInput';
import MainCategoryCard from './MainCategoryCard';
import NextTravel from './NextTracel';
import BroadwayOnline from './BroadwayOnline';
import RecentInfo from './RecentInfo';
import { Dimensions, Animated } from 'react-native';

const Search = () => {
  return (
    <SafeAreaView>
      <MainContainer showsVerticalScrollIndicator={false}>
        <SearchInput />
        <NearByTravelImage
          resizeMode="stretch"
          source={require('./Assets/nearby_travel.png')}
        />
        <MainCategoryCard />
        <BroadwayOnline />
        <NextTravel />
        <RecentInfo />
      </MainContainer>
    </SafeAreaView>
  );
};

export default Search;

const MainContainer = styled.ScrollView`
  margin: 0 30px;
  overflow: visible;
`;

const NearByTravelImage = styled.Image`
  width: 100%;
  height: 500px;
  margin-top: 50px;
  border-radius: 20px;
`;

const Image = styled.Image`
  margin-right: 15px;
  width: 25px;
  height: 25px;
`;

const Text = styled.Text`
  font-size: 16px;
`;

const HeaderWrapper = styled.View`
  width: ${Dimensions.get('window').width - 60}px;
  margin-top: 20px;
  background-color: rgb(204, 209, 209);
  height: 50px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
