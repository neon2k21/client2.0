import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, SafeAreaView,Text, View, Image, TouchableOpacity, StyleSheet } from "react-native"
import { ip_address } from "../../../config";
import TaskCard from "../../../components/User/card_of_task";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { CogIcon,MapPinIcon, ClockIcon,PlusCircleIcon } from "react-native-heroicons/solid";
import {useFocusEffect} from "@react-navigation/native";


const UserObjectScreen=()=>{

    const [data,setData] = useState([])
    const {navigate} = useNavigation()

    useFocusEffect(
        useCallback(() => {
            getTaskForUser()
        }, [])
    );
    
   
    

    const getTaskForUser = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "id": Number(global.id),
          "object" : global.object_card
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/getUserObjecttask', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result[0])
            setData(result)
  
        })
          .catch(error => console.log('error', error));
    }

    {/*
    "date_of_creation": "2024-02-07", 
    "date_of_deadline": "2024-02-12", 
    "description": "", 
    "object_address": "ул. Гагарина, 15, Северодвинск, Архангельская обл., 164501", 
    "object_category": "Школа", 
    "object_category_master": 2, 
    "object_contact": 4, 
    "object_id": 2, 
    "object_image": "http://sevschool12.edu.ru/wp-content/uploads/2020/05/YkiXX5aTbdc-300x197.jpg", 
    "object_inn": "2902040703", 
    "object_name": "МАОУ СОШ № 12", 
    "task_id": 4, 
    "task_stage": "Выполняется", 
    "task_stage_id": 2, 
    "type_of_work_id": "Монтаж", 
    "user_fio": "Оглобля Константин Андреевич", 
    "user_id": 4, 
    "user_phone": "+79867662958", 
    "work_category_id": 2, 
    "work_category_name": "Пожарная сигнализация", 
    "worker": 2
    */}
    

    return(
        <View className={classnames[0].externalView} style={styles.externalView}>

           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
           
            <Image className={classnames[0].image} source={{uri: global.object_image}} style={styles.image}/>
           
            <View className={classnames[0].object_name} style={styles.object_name_view}>
            
                <Text  style={styles.object_name_text}>
                        {global.object_name}
                </Text>
                
                <CogIcon size={widthPercentageToDP(15)} color={'black'} onPress={()=>{getTaskForUser()}}/>
            
            </View>

           <View style={styles.componentView} className={classnames[0].componentView}>
                
                <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                
                <Text style={styles.componentViewText}>
                    {global.object_address}
                </Text>
           
           </View>

           <View style={styles.spaceView}/>

           <View style={styles.componentView} className={classnames[0].componentView}>
                
                <Text style={styles.componentViewText}>
                    ИНН
                </Text> 
                
                <Text style={styles.componentViewText}>
                    {global.object_inn}
                </Text>
           
           </View>

           <View style={styles.spaceView}/>

                <View>
                    
                    <View className={classnames[0].object_name}>
                    
                        <Text style={styles.taskText}>
                            Заявки
                        </Text>
                        
                        <TouchableOpacity onPress={()=>{navigate('Создание заявки')}}>
                            <PlusCircleIcon size={widthPercentageToDP(9)} color={'black'}/>
                        </TouchableOpacity>

                    </View>
                    
                    <FlatList
                    data={data}
                    extraData={data}
                    vertical={true}
                    className="w-full"
                    contentContainerStyle={styles.flatlistcontainer}
                    renderItem={({item})=> (

                        <TaskCard 
                        object_name = {item.object_name} 
                        object_image = {item.object_image}
                        object_address = {item.object_address}
                        date_of_deadline = {item.date_of_deadline}
                        user_fio = {item.user_fio}
                        user_phone = {item.user_phone}
                        task_stage_id = {item.task_stage_id}
                        task_stage_name = {item.task_stage}
                        type_of_work = {item.type_of_work}
                        work_category = {item.work_category}
                        task_id = {item.task_id}
                        description = {item.description}
                        />
                    )}
                    ItemSeparatorComponent={() => {return (<View style={styles.itemseparator}/>);}}
                    />

                </View>
              
            </View>           
            
        </View>
    )
}


const classnames = 
[
  {
    "externalView": "flex-1",
    "image": "absolute",
    "object_name": "flex-row",
    "componentView": "border-l-2 flex-row"

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
    }
})

export default  UserObjectScreen
