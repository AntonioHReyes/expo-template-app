import {ScreenLayout} from "theme/styles/Layout";
import styled from "styled-components/native";

export const ProfileScreen = () => {


  return(
    <ScreenLayout>
      <ProfileContainer>
        <ProfileMainText>Esta es la pantalla Perfil</ProfileMainText>
      </ProfileContainer>
    </ScreenLayout>
  )
}

const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileMainText = styled.Text`
  color: red;
`