import { useNavigation } from "@react-navigation/core"
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"

const width = widthPercentageToDP(50)

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
        <TouchableOpacity style={styles.externalView}
        onPress={()=>{
            global.master_object_name = object_name;
            global.master_object_image = object_image;
            global.master_object_address = object_address;
            global.master_date_of_deadline = date_of_deadline;
            global.master_user_fio = user_fio;
            global.master_user_phone = user_phone;
            global.master_task_stage_id = task_stage_id;
            global.master_task_stage_name = task_stage_name;
            global.master_type_of_work = type_of_work;
            global.master_work_category = work_category;
            global.master_task_id = task_id;
            global.master_description = description;
            navigate('Карточка объекта')
        }}>
             <View  className={classnames[0].externalView} style={styles.externalView}>

                <Image source={{uri: object_image}} className={classnames[0].image}/>

                <View className={classnames[0].grayView} style={styles.grayView}>
                    
                    <Text style={styles.text_name} >
                        {object_name}
                    </Text>
                    
                    <Text style={styles.text_deadline} >
                        До: {date_of_deadline}
                    
                    </Text>
                
                </View>
            
            </View>
        
        </TouchableOpacity>
           
    )


}

const classnames = 
[
  {
    "externalView": "rounded",
    "image": "rounded w-full h-full",
    "grayView": "rounded-b w-full absolute"

  }
]

const styles = StyleSheet.create({


    externalView:{
        width: width,
        height:widthPercentageToDP(33),
        alignItems:'center',
        paddingHorizontal:widthPercentageToDP(3)
    },
    grayView:{
        alignItems:'center',
        backgroundColor: 'rgba(144,144,144,0.7)',
        bottom:-widthPercentageToDP(0.2),
        height:widthPercentageToDP(12)
    },
    image: {
        width: width,
        height:widthPercentageToDP(30)
    },
    text_name:{
        color:'white',
        fontSize:widthPercentageToDP(3),
        width: widthPercentageToDP(35)
    },
    text_deadline:{
        color:'white',
        fontSize:widthPercentageToDP(3),
        width: widthPercentageToDP(35)
    }
})