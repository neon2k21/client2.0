import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from '../../components/User/card_of_object';
import { ip_address } from '../../config';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { EllipsisHorizontalCircleIcon } from 'react-native-heroicons/outline';


export default function UserMainScreen() {
  const {navigate} = useNavigation()

  const [object_data,setObject_data] = useState([]);
  const [task_data,setTask_data] = useState([]);
    
  const referss=()=>{
    getObjectsForUser()
  }

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
            console.log(result[0])
            
            // console.log(result[0])
            // console.log(typeof(Number(global.id)))
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }

   

  return (
    <SafeAreaView  style={{paddingTop:widthPercentageToDP(10)}}>
      {/* Шапка профиля */}
      <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(15),alignItems:'center', backgroundColor: 'rgba(144,144,144,0.4)'}}>
       
            <Text style={{marginHorizontal:widthPercentageToDP(10),fontSize:widthPercentageToDP(5)}}>
             {global.fio}
            </Text>
      </View>

     

            {/* карусель объектов */}
      <View  style={{width:widthPercentageToDP(100)}}>
        <View className="flex-row" >
          <Text className="text-2xl" style={{paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(85)}}>
            Мои Объекты
          </Text>
          <TouchableOpacity onPress={()=>{navigate('Список объектов');console.log('5')} }>
            <EllipsisHorizontalCircleIcon size={widthPercentageToDP(10)} color={'black'}/>
        </TouchableOpacity>
        
        </View>
        <View style={{height:widthPercentageToDP(51)}}>
        <FlatList
          data={object_data}
          horizontal={true}        
          renderItem={({item})=> (
            <ObjectCard inn = {item.inn} address = {item.address} id = {item.id} name={item.name} image={item.image}/>
          )}
          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                    height: "10%",
                    width: widthPercentageToDP(2),
                    }}
                />
            );
        }}
          />
        </View>
          
    </View>

    <Text style={{paddingTop:widthPercentageToDP(3),paddingLeft:widthPercentageToDP(3),fontSize:widthPercentageToDP(5)}}>
      О компании
    </Text>

    <View style={{height:widthPercentageToDP(20),width:widthPercentageToDP(40), backgroundColor:'black'}}/>

    <Text>
    Компания «Монтаж охранно-пожарной
    сигнализации» с 2006 года успешно занимается
проектированием, монтажом, пуско-наладкой,
техническим и сервисным обслуживанием:
автоматических систем охранно-пожарной
сигнализации,
автоматических установок пожаротушения,
систем оповещения при пожаре.
Кратчайшие сроки
Разработка рабочих проектов
    </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

