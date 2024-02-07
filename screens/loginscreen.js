import { useNavigation } from "@react-navigation/core"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert,Image, StyleSheet } from "react-native"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ip_address, userID } from "../config";

const url = 'https://w.forfun.com/fetch/50/5053c1ca9fef0b39b9e04bbcbf7a6ad0.jpeg'

const styles = StyleSheet.create({
  maincontainer:
    {
      marginTop:widthPercentageToDP(10)
    },
    image:
    {
      width:widthPercentageToDP(100),
      height:heightPercentageToDP(100)
    },
    formcontainer:
    {
      width:widthPercentageToDP(80),
      height:widthPercentageToDP(80),
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:widthPercentageToDP(50),
      borderColor:'white',
      backgroundColor: 'rgba(144,144,144,0.4)'
    },
    text:
    {
      color:'white'
    },
    textinput:
    {
      paddingHorizontal:widthPercentageToDP(3), 
      color:'white', 
      borderColor:'white',
      height:widthPercentageToDP(10)
    },
    touchableopacity:
    {
      paddingTop:widthPercentageToDP(3),
      borderColor:'white',
      height:widthPercentageToDP(10),
      alignItems:'center'
    },
    texttouchableopacity:
    {
      alignContent:'center',
      color:'white'
    }

    

})

const classnames = 
[
  {
    "image": "absolute",
    "formcontainer": "rounded-2xl border-2",
    "textinput": "w-3/4  border-2 rounded-2xl",
    "text": "text-2xl",
    "touchableopacity": "w-1/4  border-2 rounded-2xl"

  }
]



export default function LoginScreen(){

    const {navigate} = useNavigation()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "login": 'admin',
          "password": 'admin'
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

            global.id = result[0].id
            global.fio = result[0].fio
            global.role = result[0].role
            global.phone = result[0].phone
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
        <View style={styles.maincontainer}>

            <Image style={styles.image} className={classnames[0].image} source={{uri: url}}/>

            <View className={classnames[0].formcontainer} style={styles.formcontainer}>
            
              <Text className={classnames[0].text} style={styles.text}>
                Логин
              </Text>

              <TextInput
              style={styles.textinput}
              className={classnames[0].textinput}
              onChangeText={setLogin}
              value={login}
              />

              <Text className={classnames[0].text} style={styles.text}>
                Пароль
              </Text>

              <TextInput
              style={styles.textinput}
              className={classnames[0].textinput}
              onChangeText={setPassword}
              value={password}/>

              <TouchableOpacity  style={styles.touchableopacity} className={classnames[0].touchableopacity} onPress={()=>{sendData()}}>
                <Text style={styles.texttouchableopacity}>
                  Вход
                </Text>
              </TouchableOpacity>
              
            </View>
            
        </View>
    )

}