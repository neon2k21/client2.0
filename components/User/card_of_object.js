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

                <View className={classnames[0].redView} style={styles.redView}/>
                <View className={classnames[0].grayView} style={styles.grayView}/>


                        <Text style={styles.text}>
                            {name}
                        </Text>
                    

                
                
            
            </View>
        </TouchableOpacity>
    )


}


const classnames = 
[
  {
    "externalView": "rounded-2xl",
    "image": "rounded-2xl w-full h-full",
    "grayView": "rounded-2xl w-full h-full absolute flex-row",
    "redView": "rounded-2xl w-full h-full absolute flex-row",
  }
]

const styles = StyleSheet.create(
    {
        touchableopacity:
        {
            width:360,
            height:171,
            marginStart:15
        },
        grayView:
        {
            alignItems:'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        redView:{
            backgroundColor: 'rgba(242, 93, 39, 0.5)',
        },

        text:{
            width:320,
            color:'rgb(255,255,255)',
            position:'absolute',
            fontFamily:'Bold',
            fontSize:24,
            marginStart:20,
            marginTop:115

        }
    }
)