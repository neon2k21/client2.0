import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from '../components/card_of_object';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ip_address } from '../config';
import { useEffect } from 'react';

let id = 0;
let object_data = []

export default function MainScreen() {

    const getID = async()=>{
      id = await AsyncStorage.getItem("userID");
    }
    useEffect(() =>{
        getObjectsForUser()
    })

    const getObjectsForUser = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "contact": 7
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
            console.log(result[0])
            object_data = result
            //console.log(object_data[0])
        })
          .catch(error => console.log('error', error));

    }

  return (
    <SafeAreaView style={{paddingTop:widthPercentageToDP(10)}}>
      {/* Шапка профиля */}
      <View className="bg-red-500 w-full rounded-b-lg" style={{height:widthPercentageToDP(20)}}>
        <TouchableOpacity onPress={()=>{getID();getObjectsForUser()}}>
            <Text style={{marginHorizontal:widthPercentageToDP(10),paddingTop:widthPercentageToDP(3)}} className="text-2xl">
              ФИО
            </Text>
            <Text style={{marginHorizontal:widthPercentageToDP(10)}} className="text-base">
            Перейти в профиль 
            </Text>
        </TouchableOpacity>
        
      </View>
            {/* карусель объектов */}

      <View style={{paddingTop:widthPercentageToDP(50)}}>
        <View className="flex-row bg-red-500" style={{width: widthPercentageToDP(95), height:widthPercentageToDP(10), margin:widthPercentageToDP(2),alignItems:'center'}}>
        <Text className="text-2xl" style={{}}>
          Объекты
        </Text>
        <TouchableOpacity>
          <Text className="text-xl" style={{right:-widthPercentageToDP(60)}}>
          Ещё
        </Text>
        </TouchableOpacity>
        
        </View>
        
         
          <FlatList
          data={object_data}
          className="w-full h-full bg-red-500"
          contentContainerStyle={{alignContent:'center'}}
          renderItem={({item})=> (
            console.log('item',item),
            <ObjectCard name={item.name} image={item.image}/>
          )}/>

      </View>
            {/*карусель заявок */}
            <FlatList>

            </FlatList>
      <View>
        
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

