import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginscreen';
import MainScreen from '../screens/mainscreen';

const Login_Stack = createNativeStackNavigator()
const mainScreen_Stack = createNativeStackNavigator()



function mainScreenNavigator(){
 
  return(
    <mainScreen_Stack.Navigator>
    <mainScreen_Stack.Screen name="ee" options={{headerShown: false}} component={MainScreen}/>
    {/* <mainScreen_Stack.Screen name="Составление заявки"   component={Change}/>
    <mainScreen_Stack.Screen name="Список объектов"   component={Change}/>
    <mainScreen_Stack.Screen name="Список Заявок"   component={Change}/> */}
  </mainScreen_Stack.Navigator>
  )
}

function Login_StackNavigator(){
  
  return(
    <Login_Stack.Navigator>
      <Login_Stack.Screen name = "Авторизация" options={{headerShown: false}} component={LoginScreen}/>
      <Login_Stack.Screen name = "Главный экран" options={{headerShown: false}} component={mainScreenNavigator}/>
    
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