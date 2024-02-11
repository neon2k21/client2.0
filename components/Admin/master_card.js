import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity,Text, StyleSheet,Modal,FlatList,Pressable, ScrollView, View, Image } from "react-native";
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
    
        <TouchableOpacity style={styles.touchable} onPress={()=>{console.error(id); getAllTasksForMaster();setModalVisible(true);}}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
            > 
            
                <View style={styles.modalView}>
                    <View style={styles.titleModalView}></View>
                        <Image source={require('../../assets/images/emojiCool.png')} style={styles.emojiCool}/>
                        <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
                    <Image style={styles.buttonBack}source={require('../../assets/images/statusBad.png')}></Image>
                </TouchableOpacity>
                

                        <Text className={classnames[0].text} style={styles.textModalName}>
                            {name}
                        </Text>

                        <Text className={classnames[0].text} style={styles.textModalPhone}>
                            {phone}
                        </Text>

                        <Text  style={styles.text_in_modal}>
                            объекты
                                                    </Text>

                            
                               
                                <View style={{height:widthPercentageToDP(50), top:224, width:'87%', alignSelf:'center'}}>
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
                                </View>
                                

                </View>
            </Modal>
            <Image style={{position:'absolute', width:40, height:40, top: 15}} source={require('../../assets/images/emojiCool.png')}/>
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
        width:96,
        height:113,
        backgroundColor:'#f25d27',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    text: {
        color:'white',
        fontSize:12,
        fontFamily:'Bold',
        position:'absolute',
        textAlignVertical:'center',
        textAlign:'center',
        top:62,
        lineHeight:13,
        width:85,
        textTransform:'lowercase'
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
    },
    modalView:{
        backgroundColor:'#F9F1E5',
        alignSelf:'center',
        height:472,
        width:364,
        top:186,
        position:'absolute'
    },
    titleModalView:{
        height:55,
        backgroundColor:'#8C0E03',
        width:'100%',
        position:'absolute'
    },
    emojiCool:{
        position:'absolute',
        width:73,
        height:73,
        top:20,
        left:23
    },
    buttonBack:{
        width:25,
        height:25,
        position:'absolute',
        left:329,
        top:10
    },
    textModalName:{
        fontFamily:'Black',
        fontSize:25,
        position:'absolute',
        top:108,
        left:23,
        width:300,
        lineHeight:28
    },
    textModalPhone:{
        fontFamily:'SemiBold',
        fontSize:12,
        position:'absolute',
        top:166,
        left:23
    },
    text_in_modal:{
        position:'absolute',
        fontFamily:'Black',
        fontSize:15,
        textTransform:'lowercase',
        top:196,
        left:23
    },
    })

