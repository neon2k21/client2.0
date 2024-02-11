import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, Linking, Alert, Platform } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from '../../components/User/card_of_object';
import { ip_address } from '../../config';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { EllipsisHorizontalCircleIcon } from 'react-native-heroicons/outline';



 const callNumber = (phone) => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  }
  else  {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
  .then(supported => {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneNumber);
    }
  })
  .catch(err => console.log(err));
};



export default function UserMainScreen() {
  const {navigate} = useNavigation()

  const [object_data,setObject_data] = useState([]);
  const [task_data,setTask_data] = useState([]);
    
  

  useEffect(()=>{
    getObjectsForUser()
    
  },[])

    const getObjectsForUser = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "contact": Number(global.id)
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/get_object', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result[0])
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }

   

  return (
    <View  style={styles.externalView}>
      {/* Шапка профиля */}
      <View style={styles.prodileView}>
      <Image source={require('../../assets/images/headerUserMain.png')} style={styles.header}></Image>
            <Image source={require('../../assets/images/ovalFIO.png')} style={styles.ovalFIO}></Image>
            <Image source={require('../../assets/images/emojiUser.png')} style={styles.emojiUser}></Image>
        <Text style={styles.profileText}>
          {global.fio}
        </Text>
      
      </View>
      <Text style={styles.myobjecttext}>
          Мои Объекты
        </Text>
      <View  style={styles.flatlist}>
       
        
        
        <View style={styles.flalistView}>
          <FlatList
            data={object_data}
            horizontal={true}        
            renderItem={({item})=> (
              <ObjectCard inn = {item.inn} address = {item.address} id = {item.id} name={item.name} image={item.image}/>
            )}
            ItemSeparatorComponent={() => {
              return (<View style={styles.itemseparator}/>);}}
            />
        </View>
        
      </View>

    <Text style={styles.aboutcompany}>
      О компании
    </Text>

    <Image source={require('../../assets/images/logoLogin.png')}style={styles.viewforlogo}/>
    <Image style={styles.emojiCool} source={require('../../assets/images/emojiCool.png')}/>
    <Image  style={styles.emojiClock} source={require('../../assets/images/emojiClock.png')}/>
    <Image style={styles.emojiStrong} source={require('../../assets/images/emojiStrong.png')}/>
    <Image style={styles.emojiPlace} source={require('../../assets/images/emojiPlace.png')}/>
    <Text style={styles.bigtext}>         Компания «Монтаж охранно-пожарной сигнализации» с                      успешно занимается проектированием, монтажом, пуско-наладкой, техническим и сервисным обслуживанием:</Text>
    <Text style={styles.textList1}>автоматических систем охранно-пожарной
    сигнализации,</Text>
    <Text style={styles.textList2}>автоматических установок пожаротушения,</Text>
    <Text style={styles.textList3}>систем оповещения при пожаре.</Text>
    <Text style={styles.timeText}>Кратчайшие сроки</Text>
    <Text style={styles.workText}>Разработка</Text>
    <Text style={styles.placeText}>г. Северодвинск и Архангельская обл.</Text>
    <Text style={styles.nextTextBig}>2006 года</Text>
    <Text style={styles.nextTextWork}>рабочих проектов</Text>
    <Image style={styles.daught1} source={require('../../assets/images/daught.png')}/>
    <Image style={styles.daught2} source={require('../../assets/images/daught.png')}/>
    <Image style={styles.daught3} source={require('../../assets/images/daught.png')}/>

  <TouchableOpacity style={styles.imageCall} onPress={()=>{callNumber('+7(8184)55-17-72')}}>
    <Image source={require('../../assets/images/buttonCall.png')} style={{width:'100%', height:'100%'}}></Image>
    <Text style={styles.textCall}>позвонить</Text>
  </TouchableOpacity>


    <StatusBar style="auto" />

    </View>
  );
}



const styles = StyleSheet.create({


    externalView:{
      width:'100%',
      height:'100%',
      backgroundColor:'rgb(249, 241, 229)'
    },
    prodileView: {
      position:'absolute'
    },
    profileText:{
      width:200,
      marginTop:55,
      marginStart:60,
      fontSize:15,
      fontFamily:'Bold',
      position:'absolute',
      color:'rgb(4,4,4)',

    },
    flalistView:{
      
    },
    myobjecttext:{
      position:'absolute',
      fontFamily:'Black',
      fontSize:15,
      textTransform:'lowercase',
      marginStart:15,
      marginTop:129,
      color:'rgb(4,4,4)'
    },
    flatlist:{
      width:widthPercentageToDP(100),
      position:'absolute',
      marginTop:162,
      height:171
    },

    itemseparator:{
      height: "10%",
      width: 10
    },
    aboutcompany:{
      position:'absolute',
      fontFamily:'Black',
      fontSize:15,
      textTransform:'lowercase',
      marginStart:15,
      marginTop:368
      ,
      color:'rgb(4,4,4)'
    },
    viewforlogo:{
      position:'absolute',
      height:66,
      marginTop:401,
      marginStart:15,
      width:widthPercentageToDP(27),
    },
    ovalFIO:{
      width:35,
      height:35,
      position:'absolute',
      marginTop:55,
      marginStart:15,

    },
    emojiUser:{
      width:25,
      height:25,
      position:'absolute',
      marginTop:61,
      marginStart:20
    },
    header:{
      position:'absolute',
width:widthPercentageToDP(100)
    },
    bigtext:{
      position:'absolute',
      width:360,
marginStart:15,
fontFamily:'Medium',
fontSize:14,
marginTop:491

    },
    timeText:{
      position:'absolute',
      width:360,
marginStart:46,
fontFamily:'Bold',
fontSize:14,
marginTop:647
    },
    workText:{
      position:'absolute',
      width:360,
marginStart:46,
fontFamily:'Medium',
fontSize:14,
marginTop:684
    },
    placeText:{
      position:'absolute',
      width:360,
marginStart:46,
fontFamily:'Bold',
fontSize:14,
marginTop:721
    },
    textList1:{
      position:'absolute',
      width:339,
marginStart:36,
fontFamily:'Medium',
fontSize:14,
marginTop:559
    },
    textList2:{
      position:'absolute',
      width:339,
marginStart:36,
fontFamily:'Medium',
fontSize:14,
marginTop:593
    },
    textList3:{
      position:'absolute',
      width:339,
marginStart:36,
fontFamily:'Medium',
fontSize:14,
marginTop:610
    },
    daught1:{position:'absolute',marginLeft:23,marginTop:568, width:5, height:5},
    daught2:{position:'absolute',marginLeft:23,marginTop:602, width:5, height:5},
    daught3:{position:'absolute',marginLeft:23,marginTop:619, width:5, height:5},
    nextTextBig:{
      position:'absolute',
      width:150,
marginStart:134,
fontFamily:'Bold',
fontSize:14,
marginTop:508
    },
    nextTextWork:{
      position:'absolute',
      width:150,
marginStart:133,
fontFamily:'Bold',
fontSize:14,
marginTop:683
    },
    emojiCool:{
      position:'absolute',
      width:28,
      height:28,
      marginTop:477,
      marginStart:15
    },
    emojiStrong:{
      position:'absolute',
      width:28,
      height:28,
      marginTop:675,
      marginStart:15
    },
    emojiClock:{
      position:'absolute',
      width:28,
      height:28,
      marginTop:638,
      marginStart:15
    },
    emojiPlace:{
      position:'absolute',
      width:28,
      height:28,
      marginTop:712,
      marginStart:15
    },
    textCall:{
      position:'absolute',
      fontFamily:'Black',
      fontSize:15,
      textTransform:'uppercase',
      color:'rgb(255,255,255)',


    },
    imageCall:{
      position:'absolute',
      width:'45%',
      height:35,
      marginTop:768,
      justifyContent:'center',
      alignItems:'center',
      marginStart:widthPercentageToDP(50)
    },
    
})
