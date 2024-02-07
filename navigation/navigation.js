import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginscreen';
import UserMainScreen from '../screens/User/mainscreen';
import ObjectList from '../screens/User/object/objectlist';
import AddTask from '../screens/User/task/addtask';
import UserObjectScreen from '../screens/User/object/objectscreen';

//Admin
import AdminMainScreen from '../screens/Admin/mainscreen';
import AdminObjectScreen from '../screens/Admin/objectscreen';
import MasterMainScreen from '../screens/Master/mainscreen';
import MasterObjectScreen from '../screens/Master/objectscreen';
import TaskInfo from '../screens/User/task/taskscreen';
import AdminTaskInfo from '../screens/Admin/taskscreen';

const Login_Stack = createNativeStackNavigator()
const MainScreen_Stack = createNativeStackNavigator()
const Object_stack = createNativeStackNavigator()
const Task_stack = createNativeStackNavigator()

function AdminTaskScreenNavigator(){
 
  return(
    
    <Task_stack.Navigator>
        <Task_stack.Screen name="dd" options={{headerShown: false}} component={AdminObjectScreen}/>
        <Task_stack.Screen name="Заявка"  options={{headerShown: false}} component={AdminTaskInfo}/>
  </Task_stack.Navigator>
  )
}

function UserObjectScreenNavigator(){
 
  return(
    
    <Object_stack.Navigator>
        <Object_stack.Screen name="dd" options={{headerShown: false}} component={UserObjectScreen}/>
        <Object_stack.Screen name="Создание заявки" options={{headerShown: false}}  component={AddTask}/>
        <Object_stack.Screen name="Заявка" options={{headerShown: false}}  component={TaskInfo}/>
  </Object_stack.Navigator>
  )
}


function UserMainScreenNavigator(){


 //User
 if(global.role===1){
  return(
    
    <MainScreen_Stack.Navigator>
        <MainScreen_Stack.Screen name="ee" options={{headerShown: false}} component={UserMainScreen}/>
        <MainScreen_Stack.Screen name="Список объектов"  component={ObjectList}/>
        <MainScreen_Stack.Screen name="Карточка объекта" component={UserObjectScreenNavigator}/>

  </MainScreen_Stack.Navigator>
  )
 }

 //Master
 if(global.role===2){
  return(
    
    <MainScreen_Stack.Navigator>
        <MainScreen_Stack.Screen name="ee" options={{headerShown: false}} component={MasterMainScreen}/>
        <MainScreen_Stack.Screen name="Карточка объекта" component={MasterObjectScreen}/>

  </MainScreen_Stack.Navigator>
  )
 }

 //Admin
 if(global.role===3){
  return(
    
    <MainScreen_Stack.Navigator>
        <MainScreen_Stack.Screen name="ee" options={{headerShown: false}} component={AdminMainScreen}/>
        <MainScreen_Stack.Screen name="Список объектов"  component={ObjectList}/>
        <MainScreen_Stack.Screen name="Карточка объекта" component={AdminTaskScreenNavigator}/>
    </MainScreen_Stack.Navigator>
  )
 }
  
}

function Login_StackNavigator(){

  
    return(
    <Login_Stack.Navigator>
      <Login_Stack.Screen name = "Авторизация" options={{headerShown: false}} component={LoginScreen}/>
      <Login_Stack.Screen name = "Главный экран" options={{headerShown: false}} component={UserMainScreenNavigator}/>
    
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