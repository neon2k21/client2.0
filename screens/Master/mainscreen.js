import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, Modal, Pressable, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { ip_address } from '../../config';
import { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FunnelIcon } from 'react-native-heroicons/outline';
import TaskCard from '../../components/Master/card_of_task';
import { Picker } from '@react-native-picker/picker';
import {useFocusEffect} from '@react-navigation/core';


{/*
          "date_of_creation": "2024-02-06", 
          "date_of_deadline": "2024-02-09", 
          "description": "Аагег", 
          "object_address": "Морской пр-кт, 49, Северодвинск, Архангельская обл., 164213", 
          "object_category": "Больница", 
          "object_category_master": 3, 
          "object_contact": 5, 
          "object_id": 12, 
          "object_image": "https://avatars.mds.yandex.net/get-altay/1352335/2a00000162f89946dbbce258b18fd107769a/XXXL", 
          "object_inn": "2902016429", 
          "object_name": "ГБУЗ АРХАНГЕЛЬСКОЙ ОБЛАСТИ СГКБ № 2 СМП", 
          "task_id": 3, 
          "task_stage": "Выполняется", 
          "task_stage_id": 2, 
          "type_of_work_id": 1, 
          "type_of_work_name": "Обслуживание", 
          "user_fio": "Константинов Артемий Константинович", 
          "user_id": 5, 
          "user_phone": "+79217265574", 
          "work_category_id": 1, 
          "work_category_name": "Видеонаблюдение", 
          "worker": 3}
          
          */}

export default function MasterMainScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const [task_data,setTask_data] = useState([]);
  const [object_data,setObject_data] = useState([]);

  const [picker1,setPicker1] = useState(0);//nameObject
  const [picker2,setPicker2] = useState(1);//stageObject


  useFocusEffect(
    useCallback(() => {
      getAllTasksForMaster();
    }, [])
  );


  

  const getAllTasksForMaster = ()=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": Number(global.id),
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(ip_address+'/getMastertask', requestOptions)
      .then( response => response.json())
      .then( result => {
        console.log(result[0])
        setTask_data(result)

    })
      .catch(error => console.log('error', error));
    
  }


  const useFilters = () => {
    
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "id_object": picker1,
        "id_stage": picker2,

      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(ip_address+'/getMastertaskByStageAndObject', requestOptions)
        .then( response => response.json())
        .then( result => {
          console.log(result)
          setTask_data(result)

  
      })
        .catch(error => console.log('error', error));
      }
    
  return (
    <SafeAreaView  style={styles.externalView}>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {setModalVisible(!modalVisible);}}> 
          
        <View className="flex-1 justifyContent-center" >
          
          <View style={styles.modal}>
            
            <Text className={classnames[0].modaltext} style={styles.modaltext}>
              Фильтры:
            </Text>
            
            <Text className={classnames[0].modaltext} style={styles.modaltext}>
              Наименование объекта:
            </Text>

            <Picker
                  style={styles.dropdown}
                  selectedValue={picker1}
                  onValueChange={(itemValue) => {setPicker1(itemValue);}}>
                    
                    <Picker.Item label="" value={0} />      
                    <Picker.Item label="МАОУ СОШ № 12" value={2} />
                    <Picker.Item label="МАОУ СОШ № 5" value={3} />
                    <Picker.Item label="МАОУ СОШ № 30" value={4} />
                    <Picker.Item label="МАОУ СОШ № 20" value={5} />
                    <Picker.Item label="МАОУ СОШ № 11" value={6} />
                    <Picker.Item label="МАОУ СГ № 14" value={7} />
                    <Picker.Item label="МАОУ СОШ № 6" value={8} />
                    <Picker.Item label="МАОУ ЛИЦЕЙ № 17 " value={9} />
                    <Picker.Item label="МАОУ `СОШ № 3`" value={10} />
                    <Picker.Item label="МАОУ СОШ № 25" value={11} />
                    <Picker.Item label="ГБУЗ АРХАНГЕЛЬСКОЙ ОБЛАСТИ СГКБ № 2 СМП" value={12} />
                    <Picker.Item label="ГБУЗ АРХАНГЕЛЬСКОЙ ОБЛАСТИ СЕВЕРОДВИНСКИЙ РОДИЛЬНЫЙ ДОМ" value={13} />
                    <Picker.Item label="ГБУЗ АРХАНГЕЛЬСКОЙ ОБЛАСТИ ПЕРВАЯ ГКБ ИМ. Е.Е. ВОЛОСЕВИЧ" value={14} />


            </Picker>

            <Text className={classnames[0].modaltext} style={styles.modaltext}>
              Статус заявки:
            </Text>
              
            <Picker
                  style={styles.dropdown}
                  selectedValue={picker2}
                  onValueChange={(itemValue) => {setPicker2(itemValue);}}>
                    
                      <Picker.Item label="Новая заявка" value={1} />
                      <Picker.Item label="Выполняется" value={2} />
                      <Picker.Item label="Отмена" value={3} />
                      <Picker.Item label="Готово к закрытию" value={4} />
                      <Picker.Item label="Выполнено" value={5} />
                      <Picker.Item label="Просрочено" value={6} />

            </Picker>
            
            <Pressable style={styles.pressable} onPress={() => {setModalVisible(!modalVisible); useFilters();}}>
                
              <Text style={styles.textPressable}>
                Закрыть
              </Text>
              
            </Pressable>
            
          </View>
        
        </View>
      
      </Modal>

      {/* Шапка профиля */}
      <View style={styles.prodileView}>
       
        <Text style={styles.profileText}>
          {global.fio}
        </Text>
      
      </View>

            {/* карусель объектов */}
      <View  style={styles.flatlist}>
        
        <View className="flex-row" >
          
          <Text className="text-2xl" style={styles.myobjecttext}>
            Объекты
          </Text>

          <TouchableOpacity onPress={()=> setModalVisible(true)}>
            
            <FunnelIcon size={widthPercentageToDP(8)} color={'black'}/>  
          
          </TouchableOpacity>

        </View>
          
        <View>
          <FlatList
            data={task_data}
            //extraData={task_data}
            vertical={true}   
            numColumns={2}     
            renderItem={({item})=> (
    
                <TaskCard object_name={item.object_name}
                          object_image={item.object_image}
                          object_address={item.object_address}
                          date_of_deadline={item.date_of_deadline}
                          user_fio={item.user_fio}
                          user_phone={item.user_phone}
                          task_stage_id={item.task_stage_id}
                          task_stage_name={item.task_stage}
                          type_of_work={item.type_of_work_name}
                          work_category={item.work_category_name}
                          task_id={item.task_id}
                          description={item.description}/>)}
            />
        
        </View>
          
      </View>

      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}


const classnames=[
  {
    "modaltext": "text-2xl font-bold"
  }
]

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
  modal:{
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
 },
 textmodal:{
  color:'black'
 },
 pressable:[
  { borderRadius: 20,
  padding: 10,
  elevation: 2
},
   {
    backgroundColor: 'gray'
  }],
 textPressable:
  {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
 
 },
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
flalistView:{
  height:widthPercentageToDP(51)
},
myobjecttext:{
  paddingLeft:widthPercentageToDP(3),
  width:widthPercentageToDP(85)
},
flatlist:{
  width:widthPercentageToDP(100)
},

itemseparator:{
  height: "10%",
  width: widthPercentageToDP(2)
},
aboutcompany:{
  paddingTop:widthPercentageToDP(3),
  paddingLeft:widthPercentageToDP(3),
  fontSize:widthPercentageToDP(5)
},
viewforlogo:{
  height:widthPercentageToDP(20),
  width:widthPercentageToDP(40),
  backgroundColor:'black'
}
});

