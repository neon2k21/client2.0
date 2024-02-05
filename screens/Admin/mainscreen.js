import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from '../../components/Admin/card_of_object';
import { ip_address } from '../../config';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FunnelIcon } from 'react-native-heroicons/outline';
import Admin_Master_card from '../../components/Admin/master_card';


export default function AdminMainScreen() {
  const {navigate} = useNavigation()

  const [object_data,setObject_data] = useState([]);
  const [masters_data,setMasters_data] = useState([]);
    

  useEffect(()=>{
    getAllObjects()
    getAllMasters()
    
  },[])


  const getAllMasters = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/getmaster', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
            
            setMasters_data(result)

        })
          .catch(error => console.log('error', error));
  }


    const getAllObjectsByFilter = (props) =>{
      //param1 contact
      //param2 category
      const {param1,param2} = props

      if(param1!==0 && param2!==0)
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({

          "contact": Number(param1),
          "category": Number(param2)

        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/get_object_owner_category', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result.length)
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));
      }

      if(param1!==0 && param2===0)
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({

          "contact": Number(param1)

        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/get_object_owner', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result.length)
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));
      }

      if(param1===0 && param2!==0)
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({

          "category": Number(param1)

        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/get_object_category', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result.length)
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));
      }

      
  }



    const getAllObjects = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/object', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result[0])
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }


    
   {/*
  
    {"object_address": "test", 
    "object_category": "Супермаркет", 
    "object_category_master": null, 
    "object_contact": 2, 
    "object_id": 1, 
    "object_image": "test", 
    "object_inn": "test", 
    "object_name": "testsss", 
    "user_fio": "Новокрещенов Максим Викторович", 
    "user_id": 2, 
    "user_phone": "+7 963 090-37-33"}
  */}

  return (
    <SafeAreaView  style={{paddingTop:widthPercentageToDP(10)}}>
      {/* Шапка профиля */}
      <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(15),alignItems:'center', backgroundColor: 'rgba(144,144,144,0.4)'}}>
       
            <Text style={{marginHorizontal:widthPercentageToDP(10),fontSize:widthPercentageToDP(5)}}>
             {global.fio}
            </Text>
      </View>

     
      {/* Карусель мастеров */}
      <View  style={{width:widthPercentageToDP(100)}}>
        <View className="flex-row" >
          <Text className="text-2xl" style={{paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(85)}}>
           Мастера
          </Text>
        </View>
        <View style={{height:widthPercentageToDP(51)}}>
        <FlatList
          data={masters_data}
          horizontal={true}        
          renderItem={({item})=> (
            <Admin_Master_card id = {item.id} name={item.fio} phone={item.phone}/>
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




            {/* карусель объектов */}
      <View  style={{width:widthPercentageToDP(100)}}>
        <View className="flex-row" >
          <Text className="text-2xl" style={{paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(85)}}>
            Объекты
          </Text> 
          <FunnelIcon/>  
        </View>
          
        <View>
            <FlatList
              data={object_data}
              vertical={true}   
              numColumns={2}     
              style={{height:widthPercentageToDP(100)}}
              renderItem={({item})=> (
    
                <ObjectCard 
                id={item.object_id}
                name={item.object_name }
                address={item.object_address }
                image={item.object_image }
                category={item.object_category }
                inn={item.object_inn }
                owner={item.user_fio }
                phone={item.user_phone}/>
              )}
              
             
              />
        </View>
          
      </View>

   

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

