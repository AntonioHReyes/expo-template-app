import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import CustomThemedProvider from "theme/CustomThemedProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CustomThemedProvider>
          <Text>Hola Mundo que hace</Text>
        </CustomThemedProvider>
      </SafeAreaProvider>
    );
  }
}