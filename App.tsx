import {Text} from 'react-native';
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import CustomThemedProvider from "theme/CustomThemedProvider";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CustomThemedProvider>
          <NavigationContainer>
            <Text>Hola Mundo que hace</Text>
          </NavigationContainer>
        </CustomThemedProvider>
      </SafeAreaProvider>
    );
  }
}