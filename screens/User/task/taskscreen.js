import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CogIcon,MapPinIcon, TrashIcon,UserCircleIcon, PhoneIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/core';
import { ip_address } from '../../../config';



const TaskInfo = () => {
  {/*
            global.user_object_name = object_name;
            global.user_object_image = object_image;
            global.user_object_address = object_address;
            global.user_date_of_deadline = date_of_deadline;
            global.user_user_fio = user_fio;
            global.user_user_phone = user_phone;
            global.user_task_stage_id = task_stage_id;
            global.user_task_stage_name = task_stage_name;
            global.user_type_of_work = type_of_work;
            global.user_work_category = work_category;
            global.user_task_id = task_id;
            global.user_description = description;
*/}

    const {navigate} = useNavigation()

    const [desc, setDesc] = useState(global.user_description)  


  

  const updateTask =  () => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        var raw = JSON.stringify({
           "description" : desc,
           "id": global.user_task_id
        });
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/task_user', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
        })
          .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const cancelTask =  () => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        var raw = JSON.stringify({
           "id": global.user_task_id
        });
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/task_cancel', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
        })
          .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  if( global.user_task_stage_id!= 3 && global.user_task_stage_id!= 5 && global.user_task_stage_id != 6){
    return(
        <View className="flex-1" style={{backgroundColor: 'rgba(255,229,204,0.7)',width:widthPercentageToDP(100),height:widthPercentageToDP(100)}}>

           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
           <Image className="absolute" source={{uri: global.user_object_image}} style={{ width:widthPercentageToDP(100),height:widthPercentageToDP(50)}}/>
           <View className="flex-row" style={{alignItems:'center',backgroundColor: 'rgba(255,229,204,0.7)'}}>
           <Text  style={{fontSize:widthPercentageToDP(5), paddingLeft:widthPercentageToDP(1),color:'black',width:widthPercentageToDP(80)}}>
                {global.user_object_name}
           </Text>
           <TrashIcon size={widthPercentageToDP(15)} color={'black'} style={{}} onPress={()=>{cancelTask();navigate('dd')}}/>

           
           </View>

           <View style={{alignSelf:'center',alignItems:'center',
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_object_address}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>


           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_user_fio}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

            <View style={{alignSelf:'center',alignItems:'center', 
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_user_phone}
                </Text>
            </View>

            <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Тип работ
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_type_of_work}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>
           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Вид обрудования
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_work_category}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>


           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                   Дедлайн
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_date_of_deadline}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>
           
           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Комментарий
                </Text> 
                <TextInput
                style={{paddingHorizontal:widthPercentageToDP(3), color:'black', borderColor:'black',height:widthPercentageToDP(20),width:widthPercentageToDP(57)}}
                className="border-2 rounded-2xl"
                onChangeText={setDesc}
                value={desc}/>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Статус заявки
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    { global.user_task_stage_name}
                </Text>
           </View>

           <TouchableOpacity  style={{paddingTop:widthPercentageToDP(4),borderColor:'black',height:widthPercentageToDP(13), width:widthPercentageToDP(20), alignItems:'center',alignSelf:'center'}}
            className="border-2 rounded-2xl" onPress={()=>{ updateTask(); navigate('dd')}}>
               <Text style={{alignContent:'center',color:'black'}}>
                        Готово
                    </Text>
            </TouchableOpacity>



           
           
           </View>           
        </View>
    )
   }
   else {
    return(
        <View className="flex-1" style={{backgroundColor: 'rgba(255,229,204,0.7)',width:widthPercentageToDP(100),height:widthPercentageToDP(100)}}>

           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
           <Image className="absolute" source={{uri: global.user_object_image}} style={{ width:widthPercentageToDP(100),height:widthPercentageToDP(50)}}/>
           <View className="flex-row" style={{alignItems:'center',backgroundColor: 'rgba(255,229,204,0.7)'}}>
           <Text  style={{fontSize:widthPercentageToDP(5), paddingLeft:widthPercentageToDP(1),color:'black',width:widthPercentageToDP(80)}}>
                {global.user_object_name}
           </Text>
           
           </View>

           <View style={{alignSelf:'center',alignItems:'center',
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_object_address}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>


           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_user_fio}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

            <View style={{alignSelf:'center',alignItems:'center', 
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_user_phone}
                </Text>
            </View>

            <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Тип работ
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_type_of_work}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>
           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Вид обрудования
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_work_category}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>


           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                   Дедлайн
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_date_of_deadline}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>
           
           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Комментарий
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_description}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    Статус заявки
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.user_task_stage_name}
                </Text>
           </View>

           <TouchableOpacity  style={{paddingTop:widthPercentageToDP(4),borderColor:'black',height:widthPercentageToDP(13), width:widthPercentageToDP(20), alignItems:'center',alignSelf:'center'}}
            className="border-2 rounded-2xl" onPress={()=>{navigate('dd')}}>
               <Text style={{alignContent:'center',color:'black'}}>
                        Назад
                    </Text>
            </TouchableOpacity>



           
           
           </View>           
        </View>
    )
   }
};

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
});

export default TaskInfo;
