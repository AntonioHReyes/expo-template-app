import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "poppins-bold": {
            uri: require("assets/fonts/Poppins/Poppins-Bold.ttf"),
            display: Font.FontDisplay.FALLBACK
          },
          "poppins-semiBold": {
            uri: require("assets/fonts/Poppins/Poppins-SemiBold.ttf"),
            display: Font.FontDisplay.FALLBACK 
          },
          "poppins-medium": {
            uri: require("assets/fonts/Poppins/Poppins-Medium.ttf"),
            display: Font.FontDisplay.FALLBACK
          },
          "poppins-regular": {
            uri: require("assets/fonts/Poppins/Poppins-Regular.ttf"),
            display: Font.FontDisplay.FALLBACK 
          },
          /*smartports: require("assets/fonts/Icons/icomoon.ttf"),*/
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync().then();
      }
    }

    loadResourcesAndDataAsync().then();
  }, []);

  return isLoadingComplete;
}
