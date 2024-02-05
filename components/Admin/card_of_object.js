import { useNavigation } from "@react-navigation/core"
import { View, Text, TouchableOpacity, Image } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"



export default function ObjectCard(props){
    const {navigate} = useNavigation()
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
    const {id, name, address, image, category, inn, owner, phone } = props
    return(
        <TouchableOpacity  
            onPress={()=>{
            navigate('Карточка объекта');
            global.object_card = id;
            global.object_name = name;
            global.object_address = address;
            global.object_image = image;
            global.object_inn = inn;
            global.object_category = category;
            global.object_owner = owner;
            global.object_phone = phone;
            }}
            style={{width:widthPercentageToDP(45),height:widthPercentageToDP(30),margin:widthPercentageToDP(3)}}>
            <View  className="rounded-2xl">
                <Image source={{uri: image}} className=" rounded-2xl w-full h-full "/>
                <View className="rounded-b-2xl w-full absolute flex-row" style={{alignItems:'center',backgroundColor: 'rgba(144,144,144,0.7)' ,bottom:-widthPercentageToDP(0.2),height:widthPercentageToDP(13)}}>
                    <View className="w-full">
                        <Text style={{alignSelf:'center',color:'white',fontSize:widthPercentageToDP(2.5)}} >
                            {name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )


}