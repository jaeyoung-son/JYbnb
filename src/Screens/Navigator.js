import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Message from './Message';
import Profile from './Profile';
import Save from './Save';
import Search from './Search';
import Travel from './Travel';
import SearchModal from './Search/SearchModal';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const SearchRootStackVar = createStackNavigator();
const SearchStackVar = createStackNavigator();

function SearchStack() {
  return (
    <SearchStackVar.Navigator>
      <SearchStackVar.Screen name="Search" component={Search} />
    </SearchStackVar.Navigator>
  );
}

function SearchRootStack() {
  return (
    <SearchRootStackVar.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <SearchRootStackVar.Screen
        name="Main"
        component={SearchStack}
        // options={{ headerShown: false }}
      />
      <SearchRootStackVar.Screen name="SearchModal" component={SearchModal} />
    </SearchRootStackVar.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={SearchRootStack}
          name="Search"
          options={{
            tabBarLabel: ({ focused }) => <Label focus={focused}>검색</Label>,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../Assets/search.png')} />
            ),
          }}
        />
        <Tab.Screen
          component={Save}
          name="Save"
          options={{
            tabBarLabel: ({ focused }) => (
              <Label focus={focused}>저장 목록</Label>
            ),

            tabBarIcon: ({ focused }) => (
              <Image source={require('../Assets/heart.png')} />
            ),
          }}
        />
        <Tab.Screen
          component={Travel}
          name="Travel"
          options={{
            tabBarLabel: ({ focused }) => <Label focus={focused}>여행</Label>,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../Assets/airbnb.png')} />
            ),
          }}
        />
        <Tab.Screen
          component={Message}
          name="Message"
          options={{
            tabBarLabel: ({ focused }) => <Label focus={focused}>메시지</Label>,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../Assets/message.png')} />
            ),
          }}
        />
        <Tab.Screen
          component={Profile}
          name="Profile"
          options={{
            tabBarLabel: ({ focused }) => <Label focus={focused}>프로필</Label>,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../Assets/profile.png')} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const Label = styled.Text`
  font-size: 12px;
  color: ${props => (props.focus ? 'black' : 'grey')};
`;
