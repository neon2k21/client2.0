import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginscreen';
import MainScreen from '../screens/mainscreen';
import ObjectList from '../screens/object/objectlist';
import TaskList from '../screens/task/tasklist';

const Login_Stack = createNativeStackNavigator()
const MainScreen_Stack = createNativeStackNavigator()
const Task_stack = createNativeStackNavigator()



function MainScreenNavigator(){
 
  return(
    <MainScreen_Stack.Navigator>
        <MainScreen_Stack.Screen name="Главный экран" options={{headerShown: false}} component={MainScreen}/>
        <MainScreen_Stack.Screen name="Список объектов"   component={ObjectList}/>
        <MainScreen_Stack.Screen name="Список Заявок"   component={TaskList}/>
  </MainScreen_Stack.Navigator>
  )
}

function Login_StackNavigator(){
  
  return(
    <Login_Stack.Navigator>
      <Login_Stack.Screen name = "Авторизация" options={{headerShown: false}} component={LoginScreen}/>
      <Login_Stack.Screen name = "ee" options={{headerShown: false}} component={MainScreenNavigator}/>
    
    </Login_Stack.Navigator>
  )
}


export default function AppNavigation(){
    return(
       
        <NavigationContainer>
           <Login_StackNavigator/>
        </NavigationContainer>
       
    )
}