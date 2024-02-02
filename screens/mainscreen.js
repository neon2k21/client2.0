import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from '../components/card_of_object';
import { ip_address } from '../config';
import { useEffect, useState } from 'react';
import TaskCard from '../components/card_of_task';
import { useNavigation } from '@react-navigation/core';


export default function MainScreen() {
  const {navigate} = useNavigation()

  const [object_data,setObject_data] = useState([]);
  const [task_data,setTask_data] = useState([]);
    
  const referss=()=>{
    getObjectsForUser()
    getTaskForUser()
  }

  // useEffect(()=>{
  //   getObjectsForUser()
  //   getTaskForUser()
  // },[])

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
            // console.log(result[0])
            // console.log(typeof(Number(global.id)))
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }

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
          setTask_data(result)

      })
        .catch(error => console.log('error', error));

  }

  return (
    <SafeAreaView style={{paddingTop:widthPercentageToDP(10)}}>
      {/* Шапка профиля */}
      <View className="bg-red-500 w-full rounded-b-lg" style={{height:widthPercentageToDP(20)}}>
        <TouchableOpacity onPress={()=>{referss()}}>
            <Text style={{marginHorizontal:widthPercentageToDP(10),paddingTop:widthPercentageToDP(3),fontSize:widthPercentageToDP(5)}}>
             {global.fio}
            </Text>
            <Text style={{marginHorizontal:widthPercentageToDP(10)}} className="text-base">
          Нажмите чтобы обновить
            </Text>
        </TouchableOpacity>
        
      </View>
            {/* карусель объектов */}

      <View style={{paddingTop:widthPercentageToDP(50)}}>
        <View className="flex-row bg-red-500" style={{width: widthPercentageToDP(95), height:widthPercentageToDP(10), margin:widthPercentageToDP(2),alignItems:'center'}}>
        <Text className="text-2xl">
          Объекты
        </Text>
        <TouchableOpacity style={{right:-widthPercentageToDP(60)}} className="bg-red-400" onPress={()=>{navigate('Список объектов');console.log('5')} }>
          <Text className="text-xl" >
          Ещё
        </Text>
        </TouchableOpacity>
        
        </View>
          <FlatList
          data={object_data}
          horizontal={true}
          className="w-full bg-red-500"
          contentContainerStyle={{alignContent:'center'}}
          renderItem={({item})=> (

            <ObjectCard name={item.name} image={item.image}/>
          )}
          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                    height: "100%",
                    width: widthPercentageToDP(2),
                    }}
                />
            );
        }}
          />
    </View>



 {/* карусель заявок */}
  <View style={{paddingTop:widthPercentageToDP(5)}}>
        <View className="flex-row bg-red-500" style={{width: widthPercentageToDP(95), height:widthPercentageToDP(10), margin:widthPercentageToDP(2),alignItems:'center'}}>
        <Text className="text-2xl">
          Заявки
        </Text>
        <TouchableOpacity style={{right:-widthPercentageToDP(65)}} onPress={()=>{navigate('Список Заявок')}}>
          <Text className="text-xl" >
          Ещё
        </Text>
        </TouchableOpacity>
        
        </View>
        
         
          <FlatList
          data={task_data}
          horizontal={true}
          className="w-full bg-red-500"
          contentContainerStyle={{alignContent:'center'}}
          renderItem={({item})=> (
            <TaskCard name={item.object_name} stage ={item.task_stage} image={item.object_image}/>
          )}
          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                    height: "100%",
                    width: widthPercentageToDP(2),
                    }}
                />
            );
        }}
          />
        
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

