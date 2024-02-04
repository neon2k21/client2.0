import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView,Text, View, Image, TouchableOpacity } from "react-native"
import { ip_address } from "../../config";
import TaskCard from "../../components/User/card_of_task";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { CogIcon,MapPinIcon } from "react-native-heroicons/solid";



const ObjectScreen=()=>{

    const [data,setData] = useState([])


    useEffect(()=>{
        getTaskForUser()
      
       
    },[])
    

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
            console.log(result)
            setData(result)
  
        })
          .catch(error => console.log('error', error));
  
    }

    // global.object_card = id;
    // global.object_name = name;
    // global.object_address = address;
    // global.object_image = image;
    // global.object_inn = inn;
    

    return(
        <View className="flex-1" style={{backgroundColor: 'rgba(144,144,144,0.7)',width:widthPercentageToDP(100),height:widthPercentageToDP(100)}}>

           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
           <Image className="absolute" source={{uri: global.object_image}} style={{ width:widthPercentageToDP(100),height:widthPercentageToDP(50)}}/>
           <View className="flex-row" style={{alignItems:'center'}}>
           <Text className="text-2xl" style={{paddingLeft:widthPercentageToDP(1),color:'white',backgroundColor:'red',width:widthPercentageToDP(80)}}>
                {global.object_name}
           </Text>
           <CogIcon size={widthPercentageToDP(20)} color={'black'} style={{}}/>
           </View>

           <View style={{alignSelf:'center',alignItems:'center',backgroundColor:'red',
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
        gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <MapPinIcon size={widthPercentageToDP(10)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(5)}}>
                    {global.object_address}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

           <View style={{alignSelf:'center',alignItems:'center',backgroundColor:'red', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(5)}}>
                    ИНН
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(5)}}>
                    {global.object_inn}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(3)}}/>

            <View>
                <Text>
                    Заявки
                </Text>

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
            </View>

            <TouchableOpacity style={{backgroundColor:'black',width:widthPercentageToDP(80),height:widthPercentageToDP(10),alignSelf:'center'}}>
                <View style={{alignItems:'center'}}>
                    <Text className="text-xl" style={{color:'white'}}>
                        + Новая Заявка
                    </Text>
                </View>
                
            </TouchableOpacity>
               
           </View>
           
            
            
        </View>
    )


}

export default ObjectScreen

