import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/searchScreen";
import ResultShowed from "./src/screens/resultShowed";

const navigator = createStackNavigator({
  Search:SearchScreen,
  ResultShowe:ResultShowed,
},{
  initialRouteName:"Search",
  defaultNavigationOptions:{
    title:"Business Search",

  }
});

export default createAppContainer(navigator)