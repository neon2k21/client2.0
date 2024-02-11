import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, View, Text, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { ip_address } from '../../config';
import { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FunnelIcon } from 'react-native-heroicons/outline';
import TaskCard from '../../components/Master/card_of_task';
import { Picker } from '@react-native-picker/picker';
import {useFocusEffect} from '@react-navigation/core';




export default function MasterMainScreen() {

  const [task_data,setTask_data] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getAllTasksForMaster();
    }, [])
  );


  

  const getAllTasksForMaster = ()=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": Number(global.id),
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(ip_address+'/getMastertask', requestOptions)
      .then( response => response.json())
      .then( result => {
        setTask_data(result)

    })
      .catch(error => console.log('error', error));
    
  }


 
    
  return (
    <View  style={styles.externalView}>

      
      <View style={styles.prodileView}>
      <Image source={require('../../assets/images/headerUserMain.png')} style={styles.header}></Image>
            <Image source={require('../../assets/images/ovalFIO.png')} style={styles.ovalFIO}></Image>
            <Image source={require('../../assets/images/emojiCool.png')} style={styles.emojiUser}></Image>
        <Text style={styles.profileText}>
          {global.fio}
        </Text>
      
      </View>
            <Text style={styles.myobjecttext}>
            заявки
          </Text>

          
          

          

          
        <View style={{height:widthPercentageToDP(165),  top:160, width:widthPercentageToDP(100), left:15, position:'absolute'}}>
          <FlatList
            data={task_data}
            vertical={true}
            numColumns={2}
            contentContainerStyle={{paddingBottom:200}}     
   
            ItemSeparatorComponent={() => {
              return (<View style={styles.itemseparator}/>);}}
            renderItem={({item})=> (
    
                <TaskCard object_name={item.object_name}
                          object_image={item.object_image}
                          object_address={item.object_address}
                          date_of_creation={item.date_of_creation}
                          date_of_deadline={item.date_of_deadline}
                          user_fio={item.user_fio}
                          user_phone={item.user_phone}
                          task_stage_id={item.task_stage_id}
                          task_stage_name={item.task_stage}
                          type_of_work={item.type_of_work_name}
                          work_category={item.work_category_name}
                          task_id={item.task_id}
                          description={item.description}
                          />
                          )
                        }
                       
                        
              
            />
        
        </View>
          
        
      <StatusBar style="auto" />
    
    </View>
  );
}


const classnames=[
  {
    "modaltext": "text-2xl font-bold"
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  dropdown: {
    height: widthPercentageToDP(10),
    width: widthPercentageToDP(60),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  modal:{
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
 },
 textmodal:{
  color:'black'
 },
 pressable:[
  { borderRadius: 20,
  padding: 10,
  elevation: 2
},
   {
    backgroundColor: 'gray'
  }],
 textPressable:
  {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
 
 },
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
  height:widthPercentageToDP(5)
},
myobjecttext:{
  fontFamily:'Black',
  fontSize:15,
  position:'absolute',
  left:15,
  top:129
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
flatlist:{
  width:widthPercentageToDP(100)
},

itemseparator:{
  height: "6%",
  width: 10
},
aboutcompany:{
  paddingTop:widthPercentageToDP(3),
  paddingLeft:widthPercentageToDP(3),
  fontSize:widthPercentageToDP(5)
},
viewforlogo:{
  height:widthPercentageToDP(20),
  width:widthPercentageToDP(40),
  backgroundColor:'black'
},
buttonFilter:{
  position:'absolute',
  width:20,
  height:20,
  top:127,
  left:widthPercentageToDP(91)
},
});

