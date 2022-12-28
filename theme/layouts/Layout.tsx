import styled from "styled-components/native";
import {SafeAreaInsetsContext} from "react-native-safe-area-context";

export const ScreenLayout = ({children}: any) => {

  return (
    <SafeAreaInsetsContext.Consumer>
      { insets =>
        <ScreenBasicLayout
          paddingTop={insets?.top}
          paddingBottom={insets?.bottom}
          paddingLeft={insets?.left}
          paddingRight={insets?.right}
        >
          {children}
        </ScreenBasicLayout>
      }
    </SafeAreaInsetsContext.Consumer>
  )
}


export const ScreenBasicLayout = styled.View<{
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number
}>`
  padding-top: ${props => props.paddingTop ?? 0}px;
  padding-bottom: ${props => props.paddingBottom ?? 0}px;
  padding-left: ${props => props.paddingLeft ?? 0}px;
  padding-right: ${props => props.paddingRight ?? 0}px;
`