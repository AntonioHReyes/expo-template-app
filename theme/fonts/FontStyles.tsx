import styled from "styled-components/native";

export const RegularText = styled.Text`
  font-family: ${props => props.theme.fonts.poppinsRegular};
  font-size: ${props => props.theme.fontSizes.regularSize}px;
  color: ${props => props.theme.colors.text};
`

export const TitleText = styled.Text`
  font-family: ${props => props.theme.fonts.poppinsBold};
  font-size: ${props => props.theme.fontSizes.titleSize}px;
  color: ${props => props.theme.colors.text};
`

export const SubTitleText = styled.Text`
  font-family: ${props => props.theme.fonts.poppinsSemiBold};
  font-size: ${props => props.theme.fontSizes.subtitleSize}px;
  color: ${props => props.theme.colors.text};
`