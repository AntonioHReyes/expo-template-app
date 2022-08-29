import {Text} from 'react-native';
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import CustomThemedProvider from "theme/CustomThemedProvider";
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme, lightTheme} from "theme/StyledThemes";
import {useEffect, useState} from "react";


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

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CustomThemedProvider theme={appTheme}>
          <NavigationContainer>
            <Text>Hola Mundo que hace</Text>
          </NavigationContainer>
        </CustomThemedProvider>
      </SafeAreaProvider>
    );
  }
}