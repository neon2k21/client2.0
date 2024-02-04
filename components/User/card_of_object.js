import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"





export default function ObjectCard(props){

    
    const {id, name, image, address, inn, category } = props
    const {navigate} = useNavigation()

   
    return(
        <TouchableOpacity style={{width:widthPercentageToDP(90),height:widthPercentageToDP(50),paddingLeft:widthPercentageToDP(3)}}
         onPress={()=>{
            navigate('Карточка объекта');
            global.object_card = id;
            global.object_name = name;
            global.object_address = address;
            global.object_image = image;
            global.object_inn = inn;
            }}>
            

            <View  className="rounded-2xl">
                <Image source={{uri: image}} className=" rounded-2xl w-full h-full "/>
                <View className="rounded-b-2xl w-full absolute flex-row" style={{alignItems:'center',backgroundColor: 'rgba(144,144,144,0.7)' ,bottom:-widthPercentageToDP(0.2),height:widthPercentageToDP(20)}}>
                    <View  style={{width:widthPercentageToDP(45)}}>
                        <Text style={{left:widthPercentageToDP(5),color:'white',fontSize:widthPercentageToDP(5),width:widthPercentageToDP(80)}} >
                            {name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )


}