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
            console.error(result)
            
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
        
        fetch(ip_address+'/object', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result[0])
            
            setObject_data(result)

        })
          .catch(error => console.log('error', error));

    }


    

  return (
    <SafeAreaView  style={styles.externalView}>


        {/* Шапка профиля */}
      <View style={styles.prodileView}>
       
        <Text style={styles.profileText}>
          {global.fio}
        </Text>

      </View>

     
      {/* Карусель мастеров */}
      <View style={styles.flatlist}>

        <View className={classnames[0].masterFlatlist}>
          
          <Text className={classnames[0].masterText} style={styles.masterText}>
            Мастера
          </Text>
        
        </View>
      
        <View style={styles.masterView}>

          <FlatList
            data={masters_data}
            horizontal={true}        
            renderItem={({item})=> (
              <Admin_Master_card id = {item.id} name={item.fio} phone={item.phone}/>
            )}
            ItemSeparatorComponent={() => {return (<View style={styles.itemseparator}/>);}}
            />
          
        </View>
          
      </View>




            {/* карусель объектов */}
      <View  style={styles.flatlist}>
        
        <View className={classnames[0].masterFlatlist}>
          
          <Text className={classnames[0].masterText} style={styles.masterText}>
            Объекты
          </Text> 
        
        </View>
          
        <View>
          <FlatList
              data={object_data}
              vertical={true}   
              numColumns={2}     
              style={styles.flatlist}
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
        paddingTop:widthPercentageToDP(10)
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
      paddingLeft:widthPercentageToDP(3),
      width:widthPercentageToDP(85)
    },
    masterView:{
      height:widthPercentageToDP(51)
    },
    itemseparator:{
      height: "10%",
      width: widthPercentageToDP(2),
    }
})