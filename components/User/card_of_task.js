import { View, Text, TouchableOpacity, Image } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"

//arrow-right-circle


export default function TaskCard(props){
    const {name, stage, image} = props
    return(
        <TouchableOpacity>
            <View style={{ width:widthPercentageToDP(100),height:widthPercentageToDP(15),alignItems:'center',paddingHorizontal:widthPercentageToDP(3)}} 
            className="flex-row border-t-2">
                <View className="flex-row">
                <Image source={{uri: image}} 
                className="rounded"
                 style={{width:widthPercentageToDP(15),height:widthPercentageToDP(10)}}/>
                <Text style={{marginHorizontal:widthPercentageToDP(1),fontSize:widthPercentageToDP(5),width:widthPercentageToDP(60)}}>
                {name}
                </Text>
                </View>
                
                <Text style={{fontSize:widthPercentageToDP(3)}}>
                    {stage}
                </Text>
            </View>
        </TouchableOpacity>
    )


}