import { View, Text, TouchableOpacity, Image } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"

//arrow-right-circle


export default function ObjectCard(props){
    const {name, image} = props
    return(
        <TouchableOpacity>
            <View style={{width:widthPercentageToDP(60),height:widthPercentageToDP(40)}} className="rounded-2xl">
                <Image source={{uri: image}} 
                    className=" rounded-2xl w-full h-full "/>
                <View className="rounded-b-2xl w-full absolute flex-row" style={{opacity:0.7,backgroundColor:'gray' ,bottom:-widthPercentageToDP(0.2),height:widthPercentageToDP(15)}}>
                    <View  style={{width:widthPercentageToDP(45)}}>
                        <Text style={{left:widthPercentageToDP(5),color:'white'}} className="text-xl">
                            {name}
                        </Text>
                    </View>
                {/* <ArrowRightCircleIcon size={widthPercentageToDP(15)} color={'gray'} /> */}
                </View>
            </View>
        </TouchableOpacity>
    )


}