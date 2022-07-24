import {ScreenLayout} from "theme/styles/Layout";
import styled from "styled-components/native";

export const CantosScreen = () => {


  return(
    <ScreenLayout>
      <CantosContainer>
        <CantosMainText>Esta es la pantalla Cantos</CantosMainText>
      </CantosContainer>
    </ScreenLayout>
  )
}

const CantosContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CantosMainText = styled.Text`
  color: red;
`