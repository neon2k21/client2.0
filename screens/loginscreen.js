import { useNavigation } from "@react-navigation/core"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert,Image } from "react-native"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ip_address, userID } from "../config";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function LoginScreen(){
    const {navigate} = useNavigation()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "login": "test3",
          "password": "test3"
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/getuser', requestOptions)
          .then(response => response.json())
          .then(async result => {
            console.log(result)

            global.id = result.id
            global.fio = result.fio
            global.role = result.role
            global.phone = result.phone
            if(result!="Данные не совпадают! Проверьте и повторите попытку") {
                navigate('Главный экран')
            }
            else {
                 Alert.alert('Авторизация',
                    result ,[
                    {
                      text: 'ОК'
                    }
                   ])  
            }
          
        })
          .catch(error => console.log('error', error));
    } 

    return(
        <View className="w-full h-full" style={{
           marginTop:widthPercentageToDP(10)
        }}>
            <Image style={{width:widthPercentageToDP(100),height:heightPercentageToDP(100)}} className= "absolute" source={{uri: 'https://w.forfun.com/fetch/50/5053c1ca9fef0b39b9e04bbcbf7a6ad0.jpeg'}}/>
            <View className="rounded-2xl border-2" style={{ width:widthPercentageToDP(80),height:widthPercentageToDP(80),
            justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:widthPercentageToDP(50), borderColor:'white',backgroundColor: 'rgba(144,144,144,0.4)'}}>
            
            <Text className="text-2xl" style={{color:'white'}}>
               Логин
            </Text>
            <TextInput
            style={{paddingHorizontal:widthPercentageToDP(3), color:'white', borderColor:'white',height:widthPercentageToDP(10)}}
            className="w-3/4  border-2 rounded-2xl"
            onChangeText={setLogin}
            value={login}
            />

            <Text className="text-2xl" style={{color:'white'}}>
               Пароль
            </Text>
            <TextInput
             style={{paddingHorizontal:widthPercentageToDP(3),color:'white', borderColor:'white',height:widthPercentageToDP(10)}}
             className="w-3/4  border-2 rounded-2xl"
             onChangeText={setPassword}
             value={password}/>
            <TouchableOpacity  style={{paddingTop:widthPercentageToDP(3),borderColor:'white',height:widthPercentageToDP(10), alignItems:'center'}}
            className="w-1/4  border-2 rounded-2xl" onPress={()=>{sendData()}}>
               <Text style={{alignContent:'center',color:'white'}}>
                        Вход
                    </Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )

}