import { useNavigation } from "@react-navigation/core";
import { View,TouchableOpacity,Text } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";




export default function Admin_Master_card(props){

     
    const {id, name, phone } = props
    console.log(name)
    const {navigate} = useNavigation()

   
    return(
    
            <TouchableOpacity 
        style={{width:widthPercentageToDP(40),
            height:widthPercentageToDP(40),
            paddingLeft:widthPercentageToDP(3),
           
            backgroundColor:'black'}}
          
         onPress={()=>{
            navigate('Карточка Мастера');
            global.master_id = id;
            global.master_name = name;
            global.master_phone = phone;
            }}>
             <Text style={{
                color:'white',
                fontSize:widthPercentageToDP(5)}} >
                            {name}
                        </Text>

            
        </TouchableOpacity>
        
        
    )
}