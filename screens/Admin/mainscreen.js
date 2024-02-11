import { StatusBar } from 'expo-status-bar';
import { FlatList, Image,  Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from '../../components/Admin/card_of_object';
import { ip_address } from '../../config';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { FunnelIcon } from 'react-native-heroicons/outline';
import Admin_Master_card from '../../components/Admin/master_card';


export default function AdminMainScreen() {
  const {navigate} = useNavigation()

  const [object_data,setObject_data] = useState([]);
  const [masters_data,setMasters_data] = useState([]);
    
useFocusEffect(
  useCallback(()=>{
    getAllObjects()
    getAllMasters()
    
  },[])
)
  


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
              setMasters_data(result)

        })
          .catch(error => console.log('error', error));
  }

  const getAllObjects = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/admin_object', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.error(result[0])
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }


    

  return (
    <View  style={styles.externalView}>


        {/* Шапка профиля */}
        <View style={styles.prodileView}>
      <Image source={require('../../assets/images/headerUserMain.png')} style={styles.header}></Image>
            <Image source={require('../../assets/images/ovalFIO.png')} style={styles.ovalFIO}></Image>
            <Image source={require('../../assets/images/emojiUser.png')} style={styles.emojiUser}></Image>
        <Text style={styles.profileText}>
          {global.fio}
        </Text>
      
      </View>

     <Text  style={styles.masterText}>
            Мастера
          </Text>
      {/* Карусель мастеров */}
      <View>

          
          
        
      
        <View style={styles.masterView}>

          <ScrollView>
          <FlatList
            data={masters_data}
            horizontal={true}        
            renderItem={({item})=> (
              <Admin_Master_card id = {item.id} name={item.fio} phone={item.phone}  />
            )}
            ItemSeparatorComponent={() => {return (<View style={styles.itemseparator}/>);}}
            />
          </ScrollView>
          
          
        </View>
          
      </View>




            {/* карусель объектов */}
      <View  style={styles.flatlist}>
        
        
          
          <Text  style={styles.objectText}>
            Объекты
          </Text> 
        
          
        <ScrollView style={{height:widthPercentageToDP(130), position:'absolute', left:15,top:320}}>
        <FlatList
              data={object_data}
              vertical={true}   
              numColumns={2}     
              renderItem={({item})=> (
    
                <ObjectCard 
                id={item.object_id}
                name={item.object_name }
                address={item.object_address }
                image={item.object_image }
                category={item.object_category }
                inn={item.object_inn }
                owner={item.user_fio }
                phone={item.user_phone}
                task_count={item.tasks_count}
                />
              )}
              
              ItemSeparatorComponent={() => {
                return (<View style={styles.itemseparator}/>);}}
              
              />
        </ScrollView>
          
          </View>
          
    

   

      <StatusBar style="auto" />
    </View>
  );
}

const classnames = 
[
  {
    "masterFlatlist": "flex-row",
    "masterText": "text-2xl",
    "image": "rounded"

  }
]

const styles = StyleSheet.create({


    externalView:{
      backgroundColor:'#F9F1E5',
      width:'100%',
      height:'100%'
    },
    prodileView: {
      width:widthPercentageToDP(100),
      height:widthPercentageToDP(15),
      alignItems:'center',
      backgroundColor: 'rgba(144,144,144,0.4)'
    },
    profileText:{
      marginHorizontal:widthPercentageToDP(10),
      fontSize:widthPercentageToDP(5)
    },
    flatlist:{
      width:widthPercentageToDP(100)
    },
    masterText:{
     position:'absolute',
     fontFamily:'Black',
     fontSize:15,
     left:15,
     top:136,
     textTransform:'lowercase'
    },
    objectText:{
      position:'absolute',
     fontFamily:'Black',
     fontSize:15,
     left:15,
     top:298,
     textTransform:'lowercase'
    },
    masterView:{
      left:15,
      position:'absolute',
      top:170
    },
    itemseparator:{
      height: "2%",
      width: widthPercentageToDP(2),
    },
    ovalFIO:{
      width:35,
      height:35,
      position:'absolute',
      marginTop:55,
      marginStart:15,

    },
    emojiUser:{
      width:25,
      height:25,
      position:'absolute',
      marginTop:61,
      marginStart:20
    },
    header:{
      position:'absolute',
width:widthPercentageToDP(100)
    },
    prodileView: {
      position:'absolute'
    },
    profileText:{
      width:200,
      marginTop:55,
      marginStart:60,
      fontSize:15,
      fontFamily:'Bold',
      position:'absolute',
      color:'rgb(4,4,4)',

    },
})