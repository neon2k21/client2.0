import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CogIcon,MapPinIcon, PlusCircleIcon,UserCircleIcon, PhoneIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/core';
import { ip_address } from '../../../config';
import { Dropdown } from 'react-native-element-dropdown';




const AddTask = () => {

  const data_type = [
  
    {value:1,label:"Видеонаблюдение"},
    {value:2, label:"Cигнализация"}
  
  ]
  
  const data_work = [
    
    {value:1, label:"Обслуживание"},
    {value:2, label:"Монтаж"},
    {value:3, label:"Ремонт"}
  
    
  ]

  const {navigate} = useNavigation()
      
    const [picker1Data, setPicker1Data] = useState(1)
    const [picker2Data, setPicker2Data] = useState(1)//vid oborud
    const [commentary, setCommentary] = useState("")  


  const DropdownTypeComponent = (props) => {
    
    const {sub} = props

    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          
        </View>
      );
    };

    return (
      <Dropdown
        style={{ width:widthPercentageToDP(41)
        }}
        placeholderStyle={styles.componentViewText}
        selectedTextStyle={styles.componentViewText}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={{backgroundColor:'#fff'}}
        data={data_type}
        
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder={sub}
        value={picker2Data}
        onChange={item => {
          setPicker2Data(item.value);
      
        }}
       
        renderItem={renderItem}
      />
    );
  };

  const DropdownWorkComponent = (props) => {
    
    const {sub} = props

    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          
        </View>
      );
    };

    return (
      <Dropdown
        style={{ width:widthPercentageToDP(41)
        }}
        placeholderStyle={styles.componentViewText}
        selectedTextStyle={styles.componentViewText}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={{backgroundColor:'#fff'}}
        data={data_work}
        
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={sub}
        value={picker1Data}
        onChange={item => {
          setPicker1Data(item.value);
        }}
       
        renderItem={renderItem}
      />
    );
  };

    



  const createTask =  () => {
    try {
      console.error(picker1Data,picker2Data)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        var raw = JSON.stringify({
          "object": Number( global.object_card),
          "work_category": Number(picker2Data),
          "type_of_work": Number(picker1Data),
          "description" : commentary
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(ip_address+'/task', requestOptions)
          .then( response => response.json())
          .then( result => {
            console.log(result)
        })
          .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    
   
    <View className="flex-1" style={styles.externalView}>
    <Text style={styles.componentTimeStartText}>
                       дата поступления
                       </Text> 
                       <View style={styles.componentTimeStartView} >
   
                       <Text style={styles.componentViewText}>
                           {global.user_date_of_creation}
                       </Text>
       
                   </View>
              
                   
                   <Image source={{uri: global.user_object_image}} style={styles.image}/>
                   
                   <Text  style={styles.object_name_text}>
                           {global.user_object_name}
                       </Text>
                   <Image source={require('../../../assets/images/statusNew.png')} style={styles.imageIcon}></Image>  
                       <Text  style={styles.type_of_work_text}>
                           создание заявки
                       </Text>
                   
                   
                       <Text style={styles.componentTypeText}>
                           Тип работ
                       </Text> 
                       <View style={styles.componentTypeView} >
                       <DropdownWorkComponent/>
                   
                   </View>
   
   
   
                       <Text style={styles.componentWorkText}>
                           классификация деятельности
                       </Text> 
                       <View style={styles.componentWorkView}>
   
                       <DropdownTypeComponent/>
                   
                   </View>
   
   
   
                       <Text style={styles.componentTimeEndText}>
                       срок выполнения
                       </Text> 
                       <View style={styles.componentTimeEndView} >
   
                       <Text style={styles.componentViewText}>
                           {global.user_date_of_deadline}
                       </Text>
       
                   </View>
   
               <Text style={styles.componentUserInfoText}>контактное лицо</Text>
               
               <View style={styles.componentUserInfoView}>
                   <Image source={require('../../../assets/images/emojiUser.png')} style={styles.emojiUser}/>
                   <Text style={styles.componentPhoneText}>
                       {global.user_user_phone}
                   </Text> 
                   
                   <Text style={styles.componentFIOtext}>
                       {global.user_user_fio}
                   </Text>
                       
                   <View style={styles.componentCommentView}>
                       <Text style={styles.componentCommentText}>
                           Комментарий
                       </Text> 
                       <TextInput
                    defaultValue='Введите комментарий'
                    style={styles.textinput}
                    onChangeText={setCommentary}
                    value={commentary}
                    multiline = {true}
                    />
                       
                   
                   </View>
               </View>
   
               <TouchableOpacity style={{position:'absolute'}}onPress={()=>{navigate('dd')}}>
                       <Image style={styles.buttonBack}source={require('../../../assets/images/buttonBack.png')}></Image>
                   </TouchableOpacity>
                       <Text style={styles.componentStatusText}>
                           Статус заявки
                       </Text> 
                                   <View style={styles.componentStatusView}>
   
                       <Text style={styles.componentViewText}>
                           { global.user_task_stage_name}
                       </Text>
               
                   </View>
                   <TouchableOpacity  style={styles.touchable} onPress={()=>{ createTask(); navigate('dd')}}>
                       
                       <Text style={styles.t}>
                           создать
                       </Text>
                   
                   </TouchableOpacity>
   
                   
           
           </View>
      
  );
};

const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 20,
      marginBottom: 10,
    },
    question: {
      fontSize: 18,
      marginBottom: 10,
    },
    dropdown: {
      height: widthPercentageToDP(10),
      width: widthPercentageToDP(60),
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      width: 100,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
    },
    externalView:{
        backgroundColor: 'rgb(249,241,229)',
        width:widthPercentageToDP(100),
        height:widthPercentageToDP(100)
  },
  imageIcon:{position:'absolute', width:64, height:64, left:15, top:100},
  image: {
      width:widthPercentageToDP(100),
      height:90,
      position:'absolute'
  },

  type_of_work_text:{
    position:'absolute',
    width:150,
    fontSize:30,
    fontFamily:'Black',
    top:179,
    left:15,
    lineHeight:33,
    letterSpacing:-1
  },
  object_name_text:{
    position:'absolute',
    top:262,
    left:15,
    fontFamily:'Bold',
    fontSize:14,
    textTransform:'lowercase'
  },
  componentTypeView:{
      position:'absolute',
      backgroundColor:'#F25D27',
      width:widthPercentageToDP(45),
      height:44,
      top:393,
      left:15,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  },
  componentWorkView:{
    position:'absolute',
      backgroundColor:'#F25D27',
      width:widthPercentageToDP(45),
      height:44,
      top:393,
      left:widthPercentageToDP(51),
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  },
  componentStatusView:{
    position:'absolute',
      backgroundColor:'#F25D27',
      width:widthPercentageToDP(93),
      height:44,
      top:462,
      left:15,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  },
  componentStatusText:{
    position:'absolute',
      top:447,
      left:15,
      textTransform:'lowercase',
      fontFamily:'Black',
      fontSize:10
  },
  componentTimeEndView:{
    position:'absolute',
      backgroundColor:'#F25D27',
      width:widthPercentageToDP(45),
      height:44,
      top:324,
      left:widthPercentageToDP(51),
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      borderColor:"#8C0E03"
  },
  componentTimeStartView:{
    position:'absolute',
      backgroundColor:'#F25D27',
      width:widthPercentageToDP(45),
      height:44,
      top:324,
      left:15,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
  },
  componentUserInfoView:{
    position:'absolute',
      backgroundColor:'#F25D27',
      width:widthPercentageToDP(93),
      height:213,
      top:533,
      left:15,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  },
  componentViewText:{
    textTransform:'lowercase',
    color:'#fff',
    fontFamily:'Black',
    fontSize:16,
  },
  emojiUser:{
    position:'absolute',
    width:35,
    height:35,
    top:8,
    left:10
  },
  componentFIOtext:{
    top:8,
    left:60,
    position:'absolute',
    fontFamily:'Black',
    fontSize:16,
    color:'#fff'
  },
  componentPhoneText:{
    position:'absolute',
    left:60,
    top:28,
    fontFamily:'SemiBold',
    fontSize:12,
    color:'#fff'
  },
  componentCommentView:{
    position:'absolute',
    backgroundColor:'#792f14',
    borderRadius:5,
    width:widthPercentageToDP(88),
    height:150,
    top:53,
    left:10
  },
  componentCommentText:{
    position:'absolute',
    fontFamily:'Black',
    fontSize:10,
    top:5,
    left:5,
    textTransform:'lowercase',
    color:'#fff'
  },

  componentTypeText:{
      position:'absolute',
      top:378,
      left:15,
      textTransform:'lowercase',
      fontFamily:'Black',
      fontSize:10
  },
  componentWorkText:{
    position:'absolute',
      top:378,
      left:widthPercentageToDP(51),
      textTransform:'lowercase',
      fontFamily:'Black',
      fontSize:10
  },
  componentTimeEndText:{
    position:'absolute',
      top:307,
      left:widthPercentageToDP(51),
      textTransform:'lowercase',
      fontFamily:'Black',
      fontSize:10,
      color:'#8C0E03'
  },
  componentTimeStartText:{
    position:'absolute',
      top:307,
      left:15,
      textTransform:'lowercase',
      fontFamily:'Black',
      fontSize:10,
  },
  componentUserInfoText:{
    position:'absolute',
      top:516,
      left:15,
      textTransform:'lowercase',
      fontFamily:'Black',
      fontSize:10
  },
  taskText:{
      fontSize:widthPercentageToDP(6),
      paddingLeft:widthPercentageToDP(3),
      width:widthPercentageToDP(80)
  },
  flatlistcontainer:{
      alignItems:'center',
      justifyContent:'center',
      height:widthPercentageToDP(95)
  },
  itemseparator:{
      height: "0.1%",
      width: widthPercentageToDP(2),
  },
  touchable:{
      position:'absolute',
      width:widthPercentageToDP(61),
      height:35,
      left:widthPercentageToDP(36),
      top:771,
      backgroundColor:'#8C0E03',
        borderBottomLeftRadius:5,
        borderTopEndRadius:5,
        borderEndEndRadius:5,
        borderStartStartRadius:5,
        justifyContent:'center',
        alignItems:'center'
  },
  touchableDel:{
    position:'absolute',
    width:widthPercentageToDP(30),
    height:35,
    left:15,
    top:771,
      borderBottomLeftRadius:5,
      borderTopEndRadius:5,
      borderEndEndRadius:5,
      borderStartStartRadius:5,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      borderColor:'#8C0E03'
},
  pickerText:{
    fontSize:widthPercentageToDP(4),
    paddingLeft:widthPercentageToDP(3),
    width:widthPercentageToDP(40)
  },
  zapolntext:{
    fontSize:widthPercentageToDP(6),
    paddingLeft:widthPercentageToDP(3),
    width:widthPercentageToDP(80)
  },
  textinput:{
    position:'absolute',
    left:10,
    top:27,
    color:'#fff',     
    fontFamily:'Medium',
    width:widthPercentageToDP(82),
    fontSize:14,
    height:widthPercentageToDP(26),
    borderRadius:5,
  },
  t:{
    fontFamily:'Black',
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff'
  },
  tDel:{
    fontFamily:'Black',
    fontSize:15,
    textTransform:'lowercase',
    color:'#8C0E03'
  },
  buttonBack:{
    width: 75,
    height:75,
    left:-5,
    top:29,
  },
  });

const classnames = 
[
  {
    "externalView": "flex-1",
    "image": "absolute",
    "object_name": "flex-row",
    "componentView": "border-l-2 flex-row",
    "touchable": "border-2 rounded-2xl"

  }
]



export default AddTask;
