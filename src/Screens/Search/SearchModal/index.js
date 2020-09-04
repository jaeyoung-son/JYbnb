import React from 'react';
import styled from 'styled-components/native';

function SearchModal() {
  return (
    <MainContainer>
      <SafeAreaView>
        <Container>
          <Text>헬로</Text>
        </Container>
      </SafeAreaView>
    </MainContainer>
  );
}

export default SearchModal;

const MainContainer = styled.View`
  background-color: powderblue;
`;

const SafeAreaView = styled.SafeAreaView``;

const Container = styled.ScrollView`
  background-color: white;
  height: 500px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Text = styled.Text``;
