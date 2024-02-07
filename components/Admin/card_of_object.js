import { useNavigation } from "@react-navigation/core"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"



export default function ObjectCard(props){
    const {navigate} = useNavigation()
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
            style={styles.external}>
            <View  className={classnames[0]}>

                <Image source={{uri: image}} className={classnames[1]}/>

                <View className={classnames[2]} style={styles.internal}>
                    <View className={classnames[3]}>
                        <Text style={styles.text} >
                            {name}
                        </Text>
                    </View>
                </View>
                
            </View>
        </TouchableOpacity>
    )

}

const classnames = [
    "rounded-2xl",
    "rounded-2xl w-full h-full",
    "rounded-b-2xl w-full absolute flex-row",
    "w-full"
]


const styles = StyleSheet.create({
 external:
    {
        width:widthPercentageToDP(45),
        height:widthPercentageToDP(30),
        margin:widthPercentageToDP(3)
    },
 internal:
    {
        alignItems:'center',
        backgroundColor: 'rgba(144,144,144,0.7)',
        bottom:-widthPercentageToDP(0.2),
        height:widthPercentageToDP(13)
    },
 text:
    {
        alignSelf:'center',
        color:'white',
        fontSize:widthPercentageToDP(2.5)
    }

})