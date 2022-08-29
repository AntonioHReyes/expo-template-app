import styled from "styled-components/native";
import {SafeAreaInsetsContext} from "react-native-safe-area-context";

export const ScreenLayout = ({children}: any) => {

  return (
    <SafeAreaInsetsContext.Consumer>
      { insets =>
        <ScreenBasicLayout paddingTop={insets?.top}>
          {children}
        </ScreenBasicLayout>
      }
    </SafeAreaInsetsContext.Consumer>
  )
}


export const ScreenBasicLayout = styled.View<{paddingTop?: number}>`
  padding-top: ${props => props.paddingTop ?? 0}px;
`