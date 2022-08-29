import {Text} from 'react-native';
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import CustomThemedProvider from "theme/CustomThemedProvider";
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {darkTheme, lightTheme} from "theme/StyledThemes";
import {useEffect, useState} from "react";
import Colors from "theme/colors/ThemeColors";


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [appTheme, setAppTheme] = useState(lightTheme)

  useEffect(() => {
    console.log("Estamos cambiando", colorScheme)
    switch (colorScheme) {
      case "light": {
        setAppTheme(lightTheme)
        break
      }
      case "dark": {
        setAppTheme(darkTheme)
        break
      }

      default: {
        setAppTheme(lightTheme)
        break
      }

    }
  }, [colorScheme])

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
        <CustomThemedProvider theme={appTheme}>
          <NavigationContainer theme={getNavigationTheme()}>
            <Text>Hola Mundo que hace</Text>
          </NavigationContainer>
        </CustomThemedProvider>
      </SafeAreaProvider>
    );
  }
}