import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"





export default function ObjectCard(props){

    
    const {id, name, image, address, inn, category } = props
    const {navigate} = useNavigation()

   
    return(
        <TouchableOpacity style={styles.touchableopacity}
         onPress={()=>{
            navigate('Карточка объекта');
            global.object_card = id;
            global.object_name = name;
            global.object_address = address;
            global.object_image = image;
            global.object_inn = inn;
            }}>
            

            <View  className={classnames[0].externalView}>

                <Image source={{uri: image}} className={classnames[0].image}/>

                <View className={classnames[0].grayView} style={styles.grayView}>

                    <View  style={styles.ingraview}>

                        <Text style={styles.text}>
                            {name}
                        </Text>
                    
                    </View>
                
                </View>
            
            </View>
        </TouchableOpacity>
    )


}


const classnames = 
[
  {
    "externalView": "rounded-2xl",
    "image": "rounded-2xl w-full h-full",
    "grayView": "rounded-b-2xl w-full absolute flex-row",

  }
]

const styles = StyleSheet.create(
    {
        touchableopacity:
        {
            width:widthPercentageToDP(90),
            height:widthPercentageToDP(50),
            paddingLeft:widthPercentageToDP(3)
        },
        grayView:
        {
            alignItems:'center',
            backgroundColor: 'rgba(144,144,144,0.7)',
            bottom:-widthPercentageToDP(0.2),
            height:widthPercentageToDP(20)
        },
        ingraview:
        {
            width:widthPercentageToDP(45)
        },
        text:{
            left:widthPercentageToDP(5),
            color:'white',
            fontSize:widthPercentageToDP(5),
            width:widthPercentageToDP(80)
        }
    }
)