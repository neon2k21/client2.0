import { SafeAreaView, StatusBar } from "react-native";
import AppNavigation from "./navigation/navigation";
import { widthPercentageToDP } from "react-native-responsive-screen";




export default function App() {
  return (
    <SafeAreaView className="w-full h-full" >
      
          <AppNavigation/>
      </SafeAreaView>
  );
}

