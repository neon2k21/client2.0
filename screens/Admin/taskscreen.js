import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CogIcon,MapPinIcon, TrashIcon, PhoneIcon, UserCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/core';
import { ip_address } from '../../config';




const AdminTaskInfo = () => {
    
  {/*
            global.admin_object_name = object_name;
            global.admin_object_image = object_image;
            global.admin_object_address = object_address;
            global.admin_date_of_deadline = date_of_deadline;
            global.admin_user_fio = user_fio;
            global.admin_user_phone = user_phone;
            global.admin_task_stage_id = task_stage_id;
            global.admin_task_stage_name = task_stage_name;
            global.admin_type_of_work = type_of_work;
            global.admin_work_category = work_category;
            global.admin_task_id = task_id;
            global.admin_description = description;
*/}

    const {navigate} = useNavigation()

    const [desc, setDesc] = useState(global.admin_description)  


  

  const updateTask =  () => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        var raw = JSON.stringify({
           "description" : desc,
           "id": global.admin_task_id
        });
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/task_admin', requestOptions)
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
           "id": global.admin_task_id
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
  const acceptTask =  () => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        var raw = JSON.stringify({
           "id": global.admin_task_id
        });
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/task_accept', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
        })
          .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  if( global.admin_task_stage_id != 3 && global.admin_task_stage_id!= 5 && global.admin_task_stage_id != 6&& global.admin_task_stage_id!=4){
    return(
        <View className="flex-1" style={styles.externalView}>
           
           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
                
                <Image className="absolute" source={{uri: global.admin_object_image}} style={styles.image}/>
                
                <View className="flex-row" style={styles.object_name_view}>
                    
                    <Text  style={styles.object_name_text}>
                        {global.admin_object_name}
                    </Text>
                    
                    <TrashIcon size={widthPercentageToDP(15)} color={'black'} onPress={()=>{cancelTask();navigate('dd')}}/>
                    
                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_object_address}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>


                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_admin_fio}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>

                    <Text style={styles.componentViewText}>
                        {global.admin_admin_phone}
                    </Text>
                
                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Тип работ
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_type_of_work}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>
                
                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Вид обрудования
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_work_category}
                    </Text>
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Дедлайн
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_date_of_deadline}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>
                
                <View style={styles.componentView} className={classnames[0].componentView}>
                        
                    <Text style={styles.componentViewText}>
                        Комментарий
                    </Text> 
                    
                    <TextInput
                        style={{paddingHorizontal:widthPercentageToDP(3), color:'black', borderColor:'black',height:widthPercentageToDP(20),width:widthPercentageToDP(57)}}
                        className="border-2 rounded-2xl"
                        onChangeText={setDesc}
                        value={desc}/>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Статус заявки
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_task_stage_name}
                    </Text>
                
                </View>

                <TouchableOpacity style={styles.touchable} className={classnames[0].touchable}  onPress={()=>{ updateTask(); navigate('dd')}}>
                    
                    <Text style={{alignContent:'center',color:'black'}}>
                        Готово
                    </Text>
                
                </TouchableOpacity>

           </View>           
        
        </View>
    )
   }
   if( global.admin_task_stage_id == 4 ) {
    return(
            <View className="flex-1" style={styles.externalView}>
                
                <View  style={{paddingVertical:widthPercentageToDP(40)}}>
                    
                    <Image className="absolute" source={{uri: global.admin_object_image}} style={styles.image}/>
                        
                    <View className="flex-row" style={styles.object_name_view}>
                            
                        <Text  style={styles.object_name_text}>
                            {global.admin_object_name}
                        </Text>
                            
                        <CogIcon size={widthPercentageToDP(15)} color={'transparent'} style={{}}/>
                        
                    </View>

                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_object_address}
                        </Text>
                    
                    </View>

                    <View style={styles.spaceView}/>


                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_user_fio}
                        </Text>
                    
                    </View>

                    <View style={styles.spaceView}/>

                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_user_phone}
                        
                        </Text>
                    
                    </View>

                    <View style={styles.spaceView}/>

                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <Text style={styles.componentViewText}>
                            Тип работ
                        </Text> 
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_type_of_work}
                        </Text>
                    </View>

                    <View style={styles.spaceView}/>
                
                    <View style={styles.componentView} className={classnames[0].componentView}>
                            
                        <Text style={styles.componentViewText}>
                            Вид обрудования
                        </Text> 
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_work_category}
                        </Text>
                    
                    </View>

                    <View style={styles.spaceView}/>


                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <Text style={styles.componentViewText}>
                            Дедлайн
                        </Text> 
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_date_of_deadline}
                        </Text>
                    
                    </View>

                    <View style={styles.spaceView}/>
                
                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <Text style={styles.componentViewText}>
                            Комментарий
                        </Text> 
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_description}
                        </Text>
                 
                    </View>

                    <View style={styles.spaceView}/>

                    <View style={styles.componentView} className={classnames[0].componentView}>
                        
                        <Text style={styles.componentViewText}>
                            Статус заявки
                        </Text> 
                        
                        <Text style={styles.componentViewText}>
                            {global.admin_task_stage_name}
                        </Text>
                    
                    </View>

                    <TouchableOpacity style={styles.touchable} className={classnames[0].touchable} 
                        onPress={()=>{acceptTask();navigate('dd'); }}>
                        
                        <Text style={{alignContent:'center',color:'black'}}>
                            Принять работу
                        </Text>
                    
                    </TouchableOpacity>
                
                </View>           
        
        </View>
    )
   }
   else {
    return(
        <View className="flex-1" style={styles.externalView}>
           
           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
                
                <Image className="absolute" source={{uri: global.admin_object_image}} style={styles.image}/>
                
                <View className="flex-row" style={styles.object_name_view}>
                    
                    <Text  style={styles.object_name_text}>
                        {global.admin_object_name}
                    </Text>
                    
                    <TrashIcon size={widthPercentageToDP(15)} color={'black'} onPress={()=>{cancelTask();navigate('dd')}}/>
                    
                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_object_address}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>


                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_user_fio}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_user_phone}
                    </Text>
                
                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Тип работ
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_type_of_work}
                    </Text>
            
                </View>

                <View style={styles.spaceView}/>
           
                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Вид обрудования
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_work_category}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Дедлайн
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_date_of_deadline}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>
           
                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Комментарий
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_description}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <Text style={styles.componentViewText}>
                        Статус заявки
                    </Text> 
                    
                    <Text style={styles.componentViewText}>
                        {global.admin_task_stage_name}
                    </Text>
                
                </View>

                <TouchableOpacity style={styles.touchable} className={classnames[0].touchable} onPress={()=>{navigate('dd')}}>
                    
                    <Text style={{alignContent:'center',color:'black'}}>
                        Назад
                    </Text>
                
                </TouchableOpacity> 
           
           </View>           
        
        </View>
    )
   }
};

const classnames = 
[
  {
    "externalView": "flex-1",
    "image": "absolute",
    "object_name": "flex-row",
    "componentView": "border-l-2 flex-row",
    "touchable": "border-2 rounded-2xl"

  }
]

const styles = StyleSheet.create({


    externalView:{
        backgroundColor: 'rgba(255,229,204,0.7)',
        width:widthPercentageToDP(100),
        height:widthPercentageToDP(100)
    },
    image: {
        width:widthPercentageToDP(100),
        height:widthPercentageToDP(50)
    },
    object_name_view:{
        alignItems:'center',
        backgroundColor: 'rgba(255,229,204,0.7)'
    },
    object_name_text:{
        fontSize:widthPercentageToDP(5),
        paddingLeft:widthPercentageToDP(1),
        color:'black',
        width:widthPercentageToDP(80)
    },
    componentView:{
        alignSelf:'center',
        alignItems:'center',
        width:widthPercentageToDP(80),
        height:widthPercentageToDP(12),
        gap:widthPercentageToDP(3)
    },
    spaceView:{
        width:widthPercentageToDP(100),
        height:widthPercentageToDP(1)
    },
    componentViewText:{
        fontSize:widthPercentageToDP(4)
    },
    taskText:{
        fontSize:widthPercentageToDP(6),
        paddingLeft:widthPercentageToDP(3),
        width:widthPercentageToDP(80)
    },
    flatlistcontainer:{
        alignItems:'center',
        justifyContent:'center',
        height:widthPercentageToDP(95)
    },
    itemseparator:{
        height: "0.1%",
        width: widthPercentageToDP(2),
    },
    touchable:{
        paddingTop:widthPercentageToDP(4),
        borderColor:'black',
        height:widthPercentageToDP(13),
        width:widthPercentageToDP(20),
        alignItems:'center',
        alignSelf:'center'
    }
})

export default AdminTaskInfo;
