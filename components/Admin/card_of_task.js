import { useNavigation } from "@react-navigation/core"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"

//arrow-right-circle


export default function TaskCard(props){
    const {navigate} = useNavigation()
    const { object_name, 
        object_image, 
        object_address, 
        date_of_deadline, 
        user_fio, 
        user_phone, 
        task_stage_id,
        task_stage_name,
        type_of_work,
        work_category,
        task_id,
        description} = props
        
    return(
        <TouchableOpacity onPress={()=>{
            global.admin_object_name = object_name;
            global.admin_object_image = object_image;
            global.admin_object_address = object_address;
            global.admin_date_of_deadline = date_of_deadline;
            global.admin_user_fio = user_fio;
            global.admin_user_phone = user_phone;
            global.admin_task_stage_id = task_stage_id;
            global.admin_task_stage_name = task_stage_name;
            global.admin_type_of_work = type_of_work;
            global.admin_work_category = work_category;
            global.admin_task_id = task_id;
            global.admin_description = description;
            navigate('Заявка')
        }}>
            <View style={styles.externalView} className="flex-row border-t-2">
                <Image source={{uri: object_image}} className="rounded"style={styles.image}/>
                <Text style={styles.text_name}>
                    {object_name}
                </Text>               
                <Text style={styles.text_stage}>
                    {task_stage_name}
                </Text>
            </View>
        </TouchableOpacity>
            
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