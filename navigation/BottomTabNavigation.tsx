import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "screens/Home/HomeScreen";
import {CantosScreen} from "screens/Cantos/CantosScreen";
import {ProfileScreen} from "screens/Profile/ProfileScreen";


const BottomTab = createBottomTabNavigator()

export const BottomTabNavigator = () => {

  return (
    <BottomTab.Navigator
      initialRouteName={"Home"}>
      <BottomTab.Screen name={"Home"} component={HomeScreen}/>
      <BottomTab.Screen name={"Cantos"} component={CantosScreen}/>
      <BottomTab.Screen name={"Profile"} component={ProfileScreen}/>
    </BottomTab.Navigator>
  )
}