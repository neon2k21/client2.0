import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView,Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { ip_address } from "../../config";
import TaskCard from "../../components/Admin/card_of_task";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { CogIcon,MapPinIcon,UserCircleIcon, PhoneIcon } from "react-native-heroicons/solid";
import { Picker } from '@react-native-picker/picker';





const MasterObjectScreen=()=>{
    const {navigate} = useNavigation()
    
    const [desc, setDesc] = useState(global.master_description)
    const [stage, setStage] = useState(global.master_task_stage_id)

    const updateTask = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "task_stage": stage,
            "description": desc,
            "id": global.master_task_id
        });
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/task_master', requestOptions)
          .then( response => response.json())
          .catch(error => console.log('error', error));
    }

   if( global.master_task_stage_id!= 3 && global.master_task_stage_id!= 5 && global.master_task_stage_id != 6){
    return(
        <View className="flex-1" style={styles.externalView}>

            <View  style={{paddingVertical:widthPercentageToDP(40)}}>
            
                <Image className="absolute" source={{uri: global.master_object_image}} style={styles.image}/>
                
                <View className="flex-row" style={styles.object_name_view}>
                    
                    <Text  style={styles.object_name_text}>
                        {global.master_object_name}
                    </Text>
           
                    <CogIcon size={widthPercentageToDP(15)} color={'transparent'} style={{}}/>

                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                        
                    <Text style={styles.componentViewText}>
                        {global.master_object_address}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                
                    <Text style={styles.componentViewText}>
                        {global.master_user_fio}
                    </Text>
           
                </View> 

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                
                    <Text style={styles.componentViewText}>
                        {global.master_user_phone}
                    </Text>
            
                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Тип работ
                    </Text> 
                
                    <Text style={styles.componentViewText}>
                        {global.master_type_of_work}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Вид обрудования
                    </Text> 
                
                    <Text style={styles.componentViewText}>
                        {global.master_work_category}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Дедлайн
                    </Text> 
                
                    <Text style={styles.componentViewText}>
                        {global.master_date_of_deadline}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>
           
                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Комментарий
                    </Text> 
                
                   <TextInput style={styles.textinput} className="border-2 rounded-2xl" onChangeText={setDesc} value={desc}/>
           
                </View>

                <View style={styles.spaceView}/>    

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Статус заявки
                    </Text> 
                
                    <Picker
                style={styles.dropdown}
                
                selectedValue={stage}
                onValueChange={(itemValue) => {setStage(itemValue);}}>
                        
                    <Picker.Item label="Новая заявка" value={1} />
                    <Picker.Item label="Выполняется" value={2} />
                    <Picker.Item label="Готово к закрытию" value={4} />

                    </Picker>
           
                </View>

                <TouchableOpacity  style={styles.touchable} className={classnames[0].touchable} onPress={()=>{ updateTask(); navigate('ee')}}>
                
                    <Text style={styles.textintouchable}>
                        Готово
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
                
                <Image className="absolute" source={{uri: global.master_object_image}} style={styles.image}/>
                
                <View className="flex-row" style={styles.object_name_view}>
                    
                    <Text  style={styles.object_name_text}>
                        {global.master_object_name}
                    </Text>
           
                    <CogIcon size={widthPercentageToDP(15)} color={'transparent'} style={{}}/>

                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                
                    <Text style={styles.componentViewText}>
                        {global.master_object_address}
                    </Text>
                
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
        
                    <Text style={styles.componentViewText}>
                        {global.master_user_fio}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                    
                    <Text style={styles.componentViewText}>
                      {global.master_user_phone}
                    </Text>
            
                </View>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Тип работ
                    </Text> 
                 
                    <Text style={styles.componentViewText}>
                        {global.master_type_of_work}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>
            
                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Вид обрудования
                    </Text> 
                 
                    <Text style={styles.componentViewText}>
                        {global.master_work_category}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>    

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Дедлайн
                    </Text> 
                 
                    <Text style={styles.componentViewText}>
                        {global.master_date_of_deadline}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>
           
                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Комментарий
                    </Text> 
                 
                    <Text style={styles.componentViewText}>
                        {global.master_description}
                    </Text>
           
                </View>

                <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>

                    <Text style={styles.componentViewText}>
                        Статус заявки
                    </Text> 
                
                    <Text style={styles.componentViewText}>
                       {global.master_task_stage_name}
                    </Text>
            
                </View>

                <TouchableOpacity  style={styles.touchable} className={classnames[0].touchable} onPress={()=>{navigate('ee')}}>
               
                    <Text style={styles.textintouchable}>
                        Назад
                    </Text>
            
                </TouchableOpacity>

            </View>           
        
        </View>
    )
   }
    


}


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
    touchable:
        {
            paddingTop:widthPercentageToDP(4),
            borderColor:'black',
            height:widthPercentageToDP(13),
            width:widthPercentageToDP(20), 
            alignItems:'center',
            alignSelf:'center'
        },
    textintouchable:{
        alignContent:'center',
        color:'black'
    },
    textinput:{
        paddingHorizontal:widthPercentageToDP(3), 
        color:'black', 
        borderColor:'black',
        height:widthPercentageToDP(20),
        width:widthPercentageToDP(57)
    }
    
  });

export default MasterObjectScreen

