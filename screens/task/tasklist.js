import { styled } from "nativewind";
import { useReducer, useState, useEffect } from "react";
import { View,FlatList, StyleSheet, TouchableWithoutFeedback, Icon, TouchableOpacity} from "react-native";
import { Colors, DebugInstructions} from "react-native/Libraries/NewAppScreen";
import { ip_address } from "../../config";
import TaskCard from "../../components/User/card_of_task";
import { PlusCircleIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";



export default function TaskList(){
    const {navigate} = useNavigation()
    const [data,setData] = useState([])
    useEffect(()=>{
        getTaskForUser()
    },[])
    const getTaskForUser = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "id": Number(global.id)
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/getUsertask', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
            setData(result)
  
        })
          .catch(error => console.log('error', error));
  
    }
    return(
        <View className="w-full h-full">
            <FlatList
          data={data}
          vertical={true}
          className="w-full bg-red-500"
          contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
          renderItem={({item})=> (

            <TaskCard name={item.object_name} stage ={item.task_stage} image={item.object_image}/>
          )}
          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                    height: "0.1%",
                    width: widthPercentageToDP(2),
                    }}
                />
            );
        }}
        />
        <TouchableOpacity onPress={()=>{navigate('Создание заявки')}} className = "absolute" style={{right:widthPercentageToDP(5), bottom:widthPercentageToDP(6)}}>
            <PlusCircleIcon color={'black'} size ={widthPercentageToDP(17)}/>
        </TouchableOpacity>
        </View>
    )


}