import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView,Text, View, Image, TouchableOpacity } from "react-native"
import { ip_address } from "../../config";
import TaskCard from "../../components/Admin/card_of_task";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { CogIcon,MapPinIcon,UserCircleIcon, PhoneIcon } from "react-native-heroicons/solid";



const AdminObjectScreen=()=>{

    const [data,setData] = useState([])


    useEffect(()=>{
        getTaskForUser()
    },[])
    

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
        <View className="flex-1" style={{backgroundColor: 'rgba(255,229,204,0.7)',width:widthPercentageToDP(100),height:widthPercentageToDP(100)}}>

           <View  style={{paddingVertical:widthPercentageToDP(40)}}>
           <Image className="absolute" source={{uri: global.object_image}} style={{ width:widthPercentageToDP(100),height:widthPercentageToDP(50)}}/>
           <View className="flex-row" style={{alignItems:'center',backgroundColor: 'rgba(255,229,204,0.7)'}}>
           <Text  style={{fontSize:widthPercentageToDP(5), paddingLeft:widthPercentageToDP(1),color:'black',width:widthPercentageToDP(80)}}>
                {global.object_name}
           </Text>
           <CogIcon size={widthPercentageToDP(15)} color={'transparent'} style={{}}/>
           </View>

           <View style={{alignSelf:'center',alignItems:'center',
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <MapPinIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.object_address}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    ИНН
                </Text> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.object_inn}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

           <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.object_owner}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

            <View style={{alignSelf:'center',alignItems:'center', 
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.object_phone}
                </Text>
            </View>





           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(3)}}/>

            <View>
                <View className="flex-row">
                <Text style={{fontSize:widthPercentageToDP(6),paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(80)}}>
                    Заявки
                </Text>

                </View>
                
                <FlatList
            data={data}
            vertical={true}
            className="w-full"
            style={{height:widthPercentageToDP(95)}}
            contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
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
                />
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
           </View>           
        </View>
    )


}

export default AdminObjectScreen

