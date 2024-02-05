import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CogIcon,MapPinIcon, PlusCircleIcon,UserCircleIcon, PhoneIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/core';
import { ip_address } from '../../../config';

const questionData = [
  {
    id: 1,
    question: "1.Класификация деятельности",
    options: ["Видеонаблюдение", "Пожарная сигнализация"]
  },
  {
    id: 2,
    question: "2.Вид работ",
    options: ["Обслуживание", "Монтаж", "Ремонт"]
  },
];

const AddTask = () => {

    const {navigate} = useNavigation()
  
  const [selectedValues, setSelectedValues] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [picker1Data, setPicker1Data] = useState(1)
  const [picker2Data, setPicker2Data] = useState(1)//vid oborud
  const [commentary, setCommentary] = useState("")  


  useEffect(() => {
    
  }, []);



  const handlePickerChange = (itemValue, questionId) => {
    setSelectedValues({ ...selectedValues, [questionId]: itemValue });
  };

  const createTask =  () => {
    try {
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
    
    <View className="flex-1" style={{backgroundColor: 'rgba(255,229,204,0.7)',width:widthPercentageToDP(100),height:widthPercentageToDP(100)}}>

    <View  style={{paddingVertical:widthPercentageToDP(40)}}>
    <Image className="absolute" source={{uri: global.object_image}} style={{ width:widthPercentageToDP(100),height:widthPercentageToDP(50)}}/>
    <View className="flex-row" style={{alignItems:'center',backgroundColor: 'rgba(255,229,204,0.7)'}}>
    <Text  style={{fontSize:widthPercentageToDP(5), paddingLeft:widthPercentageToDP(1),color:'black',width:widthPercentageToDP(80)}}>
         {global.object_name}
    </Text>
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

    <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(3)}}/>

    <View style={{alignSelf:'center',alignItems:'center', 
           width:widthPercentageToDP(80),height:widthPercentageToDP(12),
           gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <UserCircleIcon size={widthPercentageToDP(7)} color={'black'}/> 
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.fio}
                </Text>
           </View>

           <View style={{width:widthPercentageToDP(100),height:widthPercentageToDP(1)}}/>

            <View style={{alignSelf:'center',alignItems:'center', 
            width:widthPercentageToDP(80),height:widthPercentageToDP(12),
            gap:widthPercentageToDP(3)}}
            className="border-l-2 flex-row">
                <PhoneIcon size={widthPercentageToDP(7)} color={'black'}/>
                <Text style={{fontSize:widthPercentageToDP(4)}}>
                    {global.phone}
                </Text>
            </View>

     <View>
         <View className="flex-row">
         <Text style={{fontSize:widthPercentageToDP(6),paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(80)}}>
             Заполните поля:
         </Text>
      
         </View>

         <View>
         <View className="flex-row">
         <Text style={{fontSize:widthPercentageToDP(4),paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(40)}}>
        Тип работ: 
         </Text>
         <Picker
        selectedValue={selectedValues[questionData[1].id]}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => {handlePickerChange(itemValue, questionData[1].id);setPicker1Data(itemIndex+1)}}>
        {questionData[1].options.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
      </View>
       

         </View>


         
         <View>
         <View className="flex-row">
         <Text style={{fontSize:widthPercentageToDP(4),paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(40)}}>
         Вид оборудования: 
         </Text>
         <Picker
        selectedValue={selectedValues[questionData[0].id]}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => {handlePickerChange(itemValue, questionData[0].id); setPicker2Data(itemIndex+1)}}
      >
        {questionData[0].options.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
      </View>
       

         </View>
        
        

        <View style={{alignContent:'center'}}>
         <View className="flex-row" >
         <Text style={{fontSize:widthPercentageToDP(4),paddingLeft:widthPercentageToDP(3),width:widthPercentageToDP(40)}}>
            Комментарий (опционально): 
         </Text>
         <TextInput
            style={{paddingHorizontal:widthPercentageToDP(3), color:'black', borderColor:'black',height:widthPercentageToDP(20),width:widthPercentageToDP(57)}}
            className="border-2 rounded-2xl"
            onChangeText={setCommentary}
            value={commentary}
            />
      </View>
       

         </View>

         <TouchableOpacity  style={{paddingTop:widthPercentageToDP(4),borderColor:'black',height:widthPercentageToDP(13), width:widthPercentageToDP(20), alignItems:'center',alignSelf:'center'}}
            className="border-2 rounded-2xl" onPress={()=>{ console.log('read data', picker1Data,picker2Data,commentary );createTask(); navigate('dd')}}>
               <Text style={{alignContent:'center',color:'black'}}>
                        Готово
                    </Text>
            </TouchableOpacity>

        


     </View>
     
     

    
        
    </View>
    
     
     
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
});

export default AddTask;
