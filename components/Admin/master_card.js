import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity,Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";




export default function Admin_Master_card(props){

     
    const {id, name, phone } = props
    console.log(name)
    const {navigate} = useNavigation()

   
    return(
    
        <TouchableOpacity style={styles.touchable} onPress={()=>{
            navigate('Карточка Мастера');
            global.master_id = id;
            global.master_name = name;
            global.master_phone = phone;
            }}>
            
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
        
        
    )
}


const styles = StyleSheet.create({

    touchable:{
        width:widthPercentageToDP(40),
        height:widthPercentageToDP(40),
        paddingLeft:widthPercentageToDP(3),
        backgroundColor:'black'
    },
    text: {
        color:'white',
        fontSize:widthPercentageToDP(5)
    }
})

