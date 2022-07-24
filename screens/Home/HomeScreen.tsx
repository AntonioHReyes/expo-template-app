import styled from "styled-components/native";
import {ScreenLayout} from "theme/styles/Layout";


export const HomeScreen = () => {


  return(
    <ScreenLayout>
      <HomeContainer>
        <HomeMainText>Esta es la pantalla Home</HomeMainText>
      </HomeContainer>
    </ScreenLayout>
  )
}

const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomeMainText = styled.Text`
  color: red;
`