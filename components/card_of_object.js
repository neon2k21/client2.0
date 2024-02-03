import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"



export default function ObjectCard(props){
    const [modalVisible, setModalVisible] = useState(false);

    const {name, image, address, inn, category, master } = props

    {/*
         
        "object_address": "ул. Суворова, 1", 
        "object_category": "Школа", 
        "object_inn": "2901041574", 
        "object_name": "teste", 
        "task_stage": "Новая заявка", 
         */}
    return(
        <TouchableOpacity  onPress={()=> setModalVisible(true)}>
             <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}> 
                            <TouchableOpacity   onPress={()=>{setModalVisible(false)}}>
                            <View className="flex-1 justifyContent-center" >
                                
                                <View style={{
                                  height:widthPercentageToDP(80),
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
                                }}>
                                  <Image source={{uri: image}} className="rounded-2xl" style={{height:widthPercentageToDP(40),width:widthPercentageToDP(80)}}/>
                      
                                  <Text>
                                      Наименование:
                                  </Text>
                                  <Text>
                                      {name}
                                  </Text>
                                  <Text>
                                      Адрес:
                                  </Text>
                                  <Text>
                                      {address}
                                  </Text>
                                  <Text>
                                      Инн:
                                  </Text>
                                  <Text>
                                      {inn}
                                  </Text>
                                  <Text>
                                      Категория:
                                  </Text>
                                  <Text>
                                      {category}
                                  </Text>
                          
                                  
                                  </View>
                                  </View>
                            </TouchableOpacity>
    
        </Modal> 

            <View style={{width:widthPercentageToDP(60),height:widthPercentageToDP(40)}} className="rounded-2xl">
                <Image source={{uri: image}} className=" rounded-2xl w-full h-full "/>
                <View className="rounded-b-2xl w-full absolute flex-row" style={{alignItems:'center',backgroundColor: 'rgba(144,144,144,0.7)' ,bottom:-widthPercentageToDP(0.2),height:widthPercentageToDP(15)}}>
                    <View  style={{width:widthPercentageToDP(45)}}>
                        <Text style={{left:widthPercentageToDP(5),color:'white',fontSize:widthPercentageToDP(3)}} >
                            {name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )


}