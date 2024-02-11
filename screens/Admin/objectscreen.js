import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, View,Text,  Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { ip_address } from "../../config";
import TaskCard from "../../components/Admin/card_of_task";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { CogIcon,MapPinIcon,UserCircleIcon, PhoneIcon } from "react-native-heroicons/solid";



const AdminObjectScreen=()=>{

    const {navigate} = useNavigation()

    const [data,setData] = useState([])

    useFocusEffect(
        useCallback(() => {
            getTaskForUser()
        }, [])
      );

    

    const getTaskForUser = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "object" : global.object_card
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/getAdmintask', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
            setData(result)
  
        })
          .catch(error => console.log('error', error));
  
    }

   
    
    return(
        <View className="flex-1" style={styles.externalView}>
            <Image className="absolute" source={{uri: global.object_image}} style={styles.image}/>
            <Image  source={require('../../assets/images/gradientObject.png')} style={styles.image}/>
            <Text  style={styles.object_name_text}>
                 {global.object_name}
            </Text>
            
                    
                
            
                <TouchableOpacity style={{position:'absolute'}} onPress={()=>navigate('ee')}>
                    <Image style={styles.buttonBack} source={require('../../assets/images/buttonBack.png')} onPress={()=>{navigate('ee')}}/>
                </TouchableOpacity>
                



                


                <View style={styles.person}>
                <Image source={require('../../assets/images/personIcon.png')} style={styles.personIcon}/>

                    
                    <Text style={styles.personText}>
                        {global.object_owner}
                    </Text>
                    <Text style={styles.phoneText}>
                        {global.object_phone}
                    </Text>
                
                </View>

                {/* <View style={styles.spaceView}/>

                <View style={styles.componentView} className={classnames[0].componentView}>
                    
                    <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                    
                    <Text style={{fontSize:widthPercentageToDP(4)}}>
                        {global.object_phone}
                    </Text>
                
                </View> */}


                    
                    
                    <Text style={styles.taskText}>
                        Заявки
                    </Text>


                    {/* <TouchableOpacity onPress={()=>{navigate('Создание заявки')}}>
                            <PlusCircleIcon size={widthPercentageToDP(9)} color={'black'}/>
                        </TouchableOpacity> */}
                    <View style={{height:widthPercentageToDP(83), top:488}}>
                        <FlatList
                        data={data}
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
                            type_of_work = {item.type_of_work_id}
                            work_category = {item.work_category_name}
                            task_id = {item.task_id}
                            description = {item.description}
                            date_of_creation = {item.date_of_creation}
                            />
                        )}
                        ItemSeparatorComponent={() => {return (<View style={styles.itemseparator}/>);}}
                        />
                    </View>
                   
                    <View style={styles.place} >
                    
                    <Image source={require('../../assets/images/mapIcon.png')} style={styles.mapIcon}/>
                    
                    <Text style={styles.componentText}>
                        {global.object_address}
                    </Text>
                
                </View>
                <View style={styles.inn} >
                    
                    <Text style={styles.innTitle}>
                        ИНН
                    </Text> 
                    
                    <Text style={styles.componentText}>
                        {global.object_inn}
                    </Text>
                
                </View>
        
        </View>
    )


}

const classnames = 
[
  {
    "externalView": "flex-1",
    "image": "absolute",
    "componentView": "border-l-2 flex-row"

  }
]

const styles = StyleSheet.create({


    externalView:{
        backgroundColor: 'rgb(249,241,229)',
        width:widthPercentageToDP(100),
        height:widthPercentageToDP(100)
    },
    image: {
        position:'absolute',
        width:widthPercentageToDP(100),
        height:248
    },

    object_name_text:{
        position:'absolute',
        fontFamily:'Black',
        fontSize:32,
        marginTop:209,
        marginStart:15
    },
    
    spaceView:{
        width:widthPercentageToDP(100),
        height:20
    },
   
    taskText:{
        position:'absolute',
        fontSize:15,
        fontFamily:'Black',
        marginTop:455,
        marginLeft:15
    },
    flatlistcontainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    itemseparator:{
        height: -1,
        width: widthPercentageToDP(2),
    },
    place:{
        position:'absolute',
        justifyContent:'center',
        borderLeftColor:'rgb(140,14,3)',
        borderLeftWidth:2,
        marginTop:282,
        marginStart:15,
        height:34
    },
    mapIcon:{
        width:16,
        height:20,
        marginStart:3,
        position:'absolute',
        marginTop:7
    },
    componentText:{
        fontFamily:'SemiBold',
        fontSize:14,
        width:340,
        position:'absolute',
        left:40
    },
    inn:{
        position:'absolute',
        justifyContent:'center',
        borderLeftColor:'rgb(140,14,3)',
        borderLeftWidth:2,
        marginTop:336,
        marginStart:15,
        height:17
    },
    innTitle:{
        position:'absolute',
        marginStart:3,
        marginTop:2,
        fontFamily:'Bold',
        fontSize:12,
        color:'rgb(140,14,3)'
    },
    person:{
        position:'absolute',
        justifyContent:'center',
        borderLeftColor:'rgb(140,14,3)',
        borderLeftWidth:2,
        marginTop:373,
        marginStart:15,
        height:52
    },
    personIcon:{
        marginStart:3,
        position:'absolute',
        width:15,
        height:16
    },
    personText:{
        fontFamily:'SemiBold',
        fontSize:14,
        width:340,
        position:'absolute',
        left:40,
        top:9,
    },
    phoneText:{
        fontFamily:'SemiBold',
        fontSize:12,
        width:340,
        position:'absolute',
        left:40,
        top:28,
    },
    buttonBack:{
        width: 75,
        height:75,
        left:-5,
        top:29,
        
      },

})

export default AdminObjectScreen

