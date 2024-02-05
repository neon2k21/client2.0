import { useEffect, useState } from "react";
import { View, Text,FlatList, TouchableOpacity } from "react-native";
import { ip_address } from "../../../config";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { PlusCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/core";
import ObjectCard from "../../../components/User/card_of_object";





export default function ObjectList(){
    const {navigate} = useNavigation()
    const [object_data,setObject_data] = useState([])
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

            console.log(result)
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }
    <TouchableOpacity onPress={()=>{navigate('Создание заявки')}} className = "absolute" style={{right:widthPercentageToDP(5), bottom:widthPercentageToDP(6)}}>
              <PlusCircleIcon color={'black'} size ={widthPercentageToDP(17)}/>
    </TouchableOpacity>
    return(
        <View>
            <FlatList
          data={object_data}
          vertical={true}
          className="w-full bg-red-500"
          contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
          renderItem={({item})=> (
            
            <ObjectCard name={item.name} image={item.image} address ={item.object_address} inn={item.object_inn} category={item.object_category}/>
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