import { useNavigation } from "@react-navigation/core"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen";
import { ip_address, userID } from "../config";
import axios from "axios";


const url = ip_address+'/getuser'

export default function LoginScreen(){
    const navigation = useNavigation()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "login": login,
          "password": password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/getuser', requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result)
            userID = result
            console.error(userID)
        })
          .catch(error => console.log('error', error));
    } 

    return(
        <View className="w-full h-full" style={{
paddingTop:widthPercentageToDP(10)
        }}>
            <Text>
                pole 1
            </Text>
            <TextInput
            onChangeText={setLogin}
            value={login}
            />

            <Text>
                pole 2
            </Text>
            <TextInput
             onChangeText={setPassword}
             value={password}/>
            <TouchableOpacity onPress={()=>{sendData(); navigation.navigate('Главный экран')}}>
                <View  className="bg-red-500" style={{width:widthPercentageToDP(30),height:widthPercentageToDP(10)}}>
                    <Text>
                        Вход
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}