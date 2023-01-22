import {StatusBar, StatusBarStyle, Text, useWindowDimensions} from 'react-native';
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import CustomThemedProvider from "theme/CustomThemedProvider";
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {darkTheme, lightTheme} from "theme/StyledThemes";
import {useEffect, useState} from "react";
import Colors from "theme/colors/ThemeColors";
import {Printer} from "utils/Printer";


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [appTheme, setAppTheme] = useState(lightTheme)
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('default')

  const dimensions = useWindowDimensions();

  useEffect(() => {

    let extraDimensions = {
      vwPx: dimensions.width / 100,
      vhPx: dimensions.height / 100
    }

    Printer.log("Estamos cambiando", colorScheme, dimensions)
    switch (colorScheme) {
      case "light": {
        setAppTheme({...lightTheme, screenDimens: {...dimensions, ...extraDimensions}})
        setStatusBarStyle('default')
        break
      }
      case "dark": {
        setAppTheme({...darkTheme, screenDimens: {...dimensions, ...extraDimensions}})
        setStatusBarStyle('light-content')
        break
      }

      default: {
        setAppTheme({...lightTheme, screenDimens: {...dimensions, ...extraDimensions}})
        setStatusBarStyle('default')
        break
      }

    }
  }, [colorScheme, dimensions])

  const getNavigationTheme = () => {

    let navigationTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme

    return {
      ...navigationTheme,
      colors: {
        ...navigationTheme.colors,
        background: Colors[colorScheme].themeBackground,
        card: Colors[colorScheme].navigationCardBackground,
        text: Colors[colorScheme].text
      },
    };
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle={statusBarStyle}/>
        <CustomThemedProvider theme={appTheme}>
          <NavigationContainer theme={getNavigationTheme()}>
            <Text>Hola Mundo que hace</Text>
          </NavigationContainer>
        </CustomThemedProvider>
      </SafeAreaProvider>
    );
  }
}