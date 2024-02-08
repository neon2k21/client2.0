import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity,Text, StyleSheet,Modal,View,FlatList,Pressable, ScrollView, SafeAreaView } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import TaskCard from "../User/card_of_task";
import { useState } from "react";
import { ip_address } from "../../config";
import TaskCardInModal from "../Master/infotask";





export default function Admin_Master_card(props){

    const [modalVisible, setModalVisible] = useState(false);
    const [tasks,setTasks] = useState([])
    const {id, name, phone } = props

    const getAllTasksForMaster = ()=>{

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "id": id,
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
          
            setTasks(result)
    
        })
          .catch(error => console.log('error', error));
        
      }
       
    return(
    
        <TouchableOpacity style={styles.touchable} onPress={()=>{getAllTasksForMaster();setModalVisible(true);}}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
            > 
            
                <View className={classnames[0].modalview} >
                    <View style={styles.modal}>
                    
                        <Text className={classnames[0].text} style={styles.text_in_modal}>
                            ФИО
                        </Text>

                        <Text className={classnames[0].text} style={styles.text_in_modal}>
                            {name}
                        </Text>

                        <Text className={classnames[0].text} style={styles.text_in_modal}>
                            {phone}
                        </Text>

                        <Text className={classnames[0].text} style={styles.text_in_modal}>
                            Наименование объекта:
                        </Text>

                        <View>
                            
                                <Text style={styles.text_above_flatlist}>
                                    Заявки
                                </Text>
                                <SafeAreaView style={{height:widthPercentageToDP(50)}}>
                                    <FlatList
                                    data={tasks}
                                    vertical={true}
                                    className="w-full"
                                
                                    renderItem={({item})=> (

                                        <TaskCardInModal 
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
                                    ItemSeparatorComponent={() => {return (<View style={styles.flatlist_item_sep}/>); }}
                                    />
                                </SafeAreaView>
                                
                        </View>

                    </View>
                </View>
            </Modal>
            
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
        
        
    )
}

const classnames = 
[
  {
    "text": "text-2xl font-bold",
    "modalview": "flex-1 justifyContent-center"

  }
]

const styles = StyleSheet.create({

    touchable:{
        width:widthPercentageToDP(40),
        height:widthPercentageToDP(40),
        paddingLeft:widthPercentageToDP(3),
        backgroundColor:'black'
    },
    text: {
        color:'white',
        fontSize:widthPercentageToDP(5)
    },
    modal:
    [
        {
            
            backgroundColor: 'white',
            marginVertical:widthPercentageToDP(20),
            alignItems: 'center',
            elevation: 5,
            height:widthPercentageToDP(90)
        }
    ],
     text_in_modal:{
        color:'black'
     },
    text_above_flatlist:{
        fontSize:widthPercentageToDP(6),
        paddingLeft:widthPercentageToDP(3),
        width:widthPercentageToDP(80)
    },
    flatlist:{
        alignItems:'center', 
        justifyContent:'center',
        height:widthPercentageToDP(50)
    },
    flatlist_item_sep:{
        height: "0.1%",
        width: widthPercentageToDP(2),
    },
    modal_button:
    [
        { 
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        {
          backgroundColor: 'gray'
        }
    ],
    text_modal_button:
    {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    }
    })

