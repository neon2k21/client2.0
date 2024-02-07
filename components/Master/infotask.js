import { View, Text, Image,StyleSheet } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"



export default function TaskCardInModal(props){
    
    const { object_name, object_image, task_stage_name} = props
    return(
        
            <View style={styles.externalView} className={classnames[0].externalView}>
                
                <Image source={{uri: object_image}} className={classnames[0].image} style={styles.image}/>
                <Text style={styles.text_name}>
                    {object_name}
                </Text>
                <Text style={styles.text_stage}>
                    {task_stage_name}
                </Text>
                
            </View>
        
    )
}

const classnames = 
[
  {
    "externalView": "flex-row border-t-2",
    "image": "rounded",
   

  }
]

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