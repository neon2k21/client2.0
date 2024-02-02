import { View, Text, TouchableOpacity, Image } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"

//arrow-right-circle


export default function TaskCard(props){
    const {name, stage, image} = props
    return(
        <TouchableOpacity>
            <View style={{width:widthPercentageToDP(60),height:widthPercentageToDP(40)}} className="rounded-2xl">
                <Image source={{uri: image}} 
                    className=" rounded-2xl w-full h-full "/>
                <View className="rounded-b-2xl w-full absolute flex-row" style={{opacity:0.7,alignItems:'center',backgroundColor:'gray' ,bottom:-widthPercentageToDP(0.2),height:widthPercentageToDP(15)}}>
                    <View  style={{width:widthPercentageToDP(45)}}>
                        <Text style={{left:widthPercentageToDP(5),color:'white',fontSize:widthPercentageToDP(3)}} >
                            {name}
                        </Text>
                        <Text style={{left:widthPercentageToDP(5),color:'white',fontSize:widthPercentageToDP(3)}} >
                            {stage}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )


}