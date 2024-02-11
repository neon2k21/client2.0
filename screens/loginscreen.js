import { useNavigation } from "@react-navigation/core"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert,Image, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ip_address, userID } from "../config";

const url = 'https://w.forfun.com/fetch/50/5053c1ca9fef0b39b9e04bbcbf7a6ad0.jpeg'

const styles = StyleSheet.create({
  maincontainer:
    {
width:'100%'    ,
height:'100%',
backgroundColor:'#F9F1E5'
},
    image:
    {
      width:widthPercentageToDP(100),
      height:heightPercentageToDP(100)
    },
    logoLogin:{
      width:214,
      height:124,
      position:'absolute',
      alignSelf:'center',
      top:95
    },
    loginBlur:{
      position:'absolute',
      width:292,
      height:303,
    },
    formcontainer:
    {
      position:'absolute',
      width:292,
      height:303,
      alignSelf:'center',
      // top:367,
      bottom:190
    },
    title:{
      position:'absolute',
      alignSelf:'center',
      fontFamily:'Black',
      fontSize:24,
      textTransform:'lowercase',
      top:28
    },
    textLogin:
    {
position:'absolute',
fontFamily:'Black',
fontSize:10,
textTransform:'lowercase',
top:77,
left:25
},
textPassword:
    {
position:'absolute',
fontFamily:'Black',
fontSize:10,
textTransform:'lowercase',
top:148,
left:25
},
    textinputLogin:
    {
      position:'absolute',
      width:242,
      height:44,
      borderRadius:5,
      borderWidth:2,
      alignSelf:'center',
      top:94,
      fontFamily:'Black',
      fontSize:16,
      padding:10,
    },
    textinputPassword:
    {
      position:'absolute',
      width:242,
      height:44,
      borderRadius:5,
      borderWidth:2,
      alignSelf:'center',
      top:165,
      fontFamily:'Black',
      fontSize:16,
      padding:10
    },
    touchableopacity:
    {
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      height:35,
      width:180,
      backgroundColor:'#8C0E03',
      top:234,
      position:'absolute',
      borderRadius:5
    },
    texttouchableopacity:
    {
      color:'#fff',
      position:'absolute',
      fontFamily:'Black',
      fontSize:15,
      textTransform:'uppercase'
    },
    photoLogin:{
      position:'absolute',
      bottom:150,
      left:widthPercentageToDP(8)
    },
    signalLogin:{
      position:'absolute',
      bottom:370,
      left:widthPercentageToDP(50)
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
          "login": login.toLowerCase(),
          "password": password.toLowerCase()
          // "login": "user1",
          // "password": "user1"
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
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.maincontainer}>
<Image source={require('../assets/images/logoLogin.png')} style={styles.logoLogin}/>
<Image source={require('../assets/images/photoLogin.png')} style={styles.photoLogin}/>
<Image source={require('../assets/images/signalLogin.png')} style={styles.signalLogin}/>



            <View style={styles.formcontainer}>
            <Image source={require('../assets/images/loginBlur.png')} style={styles.loginBlur}/>
            <Text style={styles.title}>вход</Text>
              <Text  style={styles.textLogin}>
                Логин
              </Text>

              <TextInput
              style={styles.textinputLogin}

              onChangeText={setLogin}
              value={login}
              />

              <Text style={styles.textPassword}>
                Пароль
              </Text>

              <TextInput
              secureTextEntry={true}
              style={styles.textinputPassword}
              onChangeText={setPassword}
              value={password}/>

              <TouchableOpacity  style={styles.touchableopacity}  onPress={()=>{sendData()}}>
                <Text style={styles.texttouchableopacity}>
                  Вход
                </Text>
              </TouchableOpacity>
              
            </View>
            
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )

}