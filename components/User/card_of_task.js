import { useNavigation } from "@react-navigation/core"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"

//arrow-right-circle


export default function TaskCard(props){
    const {navigate} = useNavigation()
     {/*
    "date_of_creation": "2024-02-07", 
    "date_of_deadline": "2024-02-12", 
    "description": "", 
    "object_address": "ул. Гагарина, 15, Северодвинск, Архангельская обл., 164501", 
    "object_category": "Школа", 
    "object_category_user": 2, 
    "object_contact": 4, 
    "object_id": 2, 
    "object_image": "http://sevschool12.edu.ru/wp-content/uploads/2020/05/YkiXX5aTbdc-300x197.jpg", 
    "object_inn": "2902040703", 
    "object_name": "МАОУ СОШ № 12", 
    "task_id": 4, 
    "task_stage": "Выполняется", 
    "task_stage_id": 2, 
    "type_of_work_id": "Монтаж", 
    "user_fio": "Оглобля Константин Андреевич", 
    "user_id": 4, 
    "user_phone": "+79867662958", 
    "work_category_id": 2, 
    "work_category_name": "Пожарная сигнализация", 
    "worker": 2
    */}
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
        <TouchableOpacity 
        onPress={()=>{
            global.user_object_name = object_name;
            global.user_object_image = object_image;
            global.user_object_address = object_address;
            global.user_date_of_deadline = date_of_deadline;
            global.user_user_fio = user_fio;
            global.user_user_phone = user_phone;
            global.user_task_stage_id = task_stage_id;
            global.user_task_stage_name = task_stage_name;
            global.user_type_of_work = type_of_work;
            global.user_work_category = work_category;
            global.user_task_id = task_id;
            global.user_description = description;
            navigate('Заявка')
        }}>

            <View style={styles.externalView} className={classnames[0].externalView}>

                <View className={classnames[0].imageView}>

                    <Image source={{uri: object_image}} className={classnames[0].image} style={styles.image}/>

                    <Text style={styles.text}>
                        {object_name}
                    </Text>

                </View>
                
                <Text style={{fontSize:widthPercentageToDP(3)}}>
                    {task_stage_name}
                </Text>
                
            </View>
        
        </TouchableOpacity>
    )


}

const classnames = 
[
  {
    "externalView": "flex-row border-t-2",
    "imageView": "flex-row",
    "image": "rounded"

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
    text:{
        marginHorizontal:widthPercentageToDP(1),fontSize:widthPercentageToDP(5),width:widthPercentageToDP(60)
    }
})