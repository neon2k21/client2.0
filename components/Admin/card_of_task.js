import { View, Text, Image, StyleSheet } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"

//arrow-right-circle


export default function TaskCard(props){
    const {name, stage, image} = props
    return(
            <View style={styles.externalView} className="flex-row border-t-2">
                <Image source={{uri: image}} className="rounded"style={styles.image}/>
                <Text style={styles.text_name}>
                    {name}
                </Text>               
                <Text style={styles.text_stage}>
                    {stage}
                </Text>
            </View>
    )


}


const styles = StyleSheet.create({

    externalView:{
        width:widthPercentageToDP(100),
        height:widthPercentageToDP(15),
        alignItems:'center',
        paddingHorizontal:widthPercentageToDP(3)
    },
    image: {
        width:widthPercentageToDP(15),
        height:widthPercentageToDP(10)
    },
    text_name:{
        marginHorizontal:widthPercentageToDP(1),
        fontSize:widthPercentageToDP(5),
        width:widthPercentageToDP(60)
    },
    text_stage:{
        fontSize:widthPercentageToDP(3)
    }
})